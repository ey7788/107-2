drop database if exists db_java;
create database db_java;
use db_java;
# 爲了保證從表參照的主表存在，通常應該先建主表。
create table teacher_table
(
	# auto_increment:實際上代表所有資料庫的自動編號策略，通常用作資料表的邏輯主鍵。
	teacher_id int auto_increment,
	teacher_name varchar(255),
	primary key(teacher_id)
);
create table student_table
(
	# 爲本表建立主鍵約束
	student_id int auto_increment primary key,
	student_name varchar(255),
	# 指定java_teacher參照到teacher_table的teacher_id欄
	java_teacher int,
	foreign key(java_teacher) references teacher_table(teacher_id)
);
insert into teacher_table
values
(null , 'Yeeku');
insert into teacher_table
values
(null , 'Leegang');
insert into teacher_table
values
(null , 'Martine');
insert into student_table
values
(null , '張三' , 1);
insert into student_table
values
(null , '張三' , 1);
insert into student_table
values
(null , '李四' , 1);
insert into student_table
values
(null , '王五' , 2);
insert into student_table
values
(null , '_王五' , 2);

insert into student_table
values
(null , null , 2);
insert into student_table
values
(null , '趙六' , null);


