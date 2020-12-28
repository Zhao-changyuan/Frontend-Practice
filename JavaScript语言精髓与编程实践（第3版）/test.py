
import pymysql
import pymysql.cursors
from shutil import copyfile, copy

connection = pymysql.connect(host='47.96.96.175',
                             user='root',
                             password='1234qwer',
                             db='bigger',
                             port=3306,
                             charset='utf8')
try:
    #
    with connection.cursor() as cursor:
        sql = 'select a.filepath, t.examno from com_answer a join t_exam_partner t on a.login_name=t.userid where a.qestion_id=17 and t.examid=12'
        cout = cursor.execute(sql)
        print("count: "+str(cout))

        index = 0
        for row in cursor.fetchall():
            index += 1
            filepath = str(row[0])
            examno = str(row[1])

            if examno is not None:
                # 1.backups
                copy(filepath, '/root/java/server/apache-tomcat-8.5.32/filesystem/exam_bak/')
                # 2. cppyfile and rename
                copyfile(
                    filepath, '/root/java/server/apache-tomcat-8.5.32/filesystem/exam/2020GA/' + examno + '.zip')
                print('index: ' + str(index) + ", filepath: " +
                    str(row[0])+', examno: '+examno)

        connection.commit()

finally:
    connection.close()
