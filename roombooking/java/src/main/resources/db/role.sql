/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.5.27 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `role` (
	`role_id` int ,
	`role_name` varchar 
); 
insert into `role` (`role_id`, `role_name`) values('1','SUPER_ADMIN');
insert into `role` (`role_id`, `role_name`) values('2','LOCATION_ADMIN');
insert into `role` (`role_id`, `role_name`) values('3','STAFF');
