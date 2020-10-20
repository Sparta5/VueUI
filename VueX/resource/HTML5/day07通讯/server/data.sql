CREATE DATABASE IF NOT EXISTS ncov2020 DEFAULT CHARACTER SET 'UTF8';
USE ncov2020;
CREATE TABLE provinces(
  id SMALLINT UNSIGNED NOT NULL KEY AUTO_INCREMENT,
  provincename VARCHAR(20) NOT NULL,
  peoplenumber MEDIUMINT UNSIGNED NOT NULL DEFAULT 0
);
INSERT provinces(provincename,peoplenumber) VALUES('北京',0);
INSERT provinces(provincename,peoplenumber) VALUES('天津',941);
INSERT provinces(provincename,peoplenumber) VALUES('上海',304);
INSERT provinces(provincename,peoplenumber) VALUES('重庆',225);
INSERT provinces(provincename,peoplenumber) VALUES('河北',0);
INSERT provinces(provincename,peoplenumber) VALUES('河南',1557);
INSERT provinces(provincename,peoplenumber) VALUES('云南',123);
INSERT provinces(provincename,peoplenumber) VALUES('辽宁',305);
INSERT provinces(provincename,peoplenumber) VALUES('黑龙江',546);
INSERT provinces(provincename,peoplenumber) VALUES('湖南',200);
INSERT provinces(provincename,peoplenumber) VALUES('安徽',226);
INSERT provinces(provincename,peoplenumber) VALUES('山东',1371);
INSERT provinces(provincename,peoplenumber) VALUES('新疆',906);
INSERT provinces(provincename,peoplenumber) VALUES('江苏',154);
INSERT provinces(provincename,peoplenumber) VALUES('浙江',1997);
INSERT provinces(provincename,peoplenumber) VALUES('江西',393);
INSERT provinces(provincename,peoplenumber) VALUES('湖北',2908);
INSERT provinces(provincename,peoplenumber) VALUES('广西',4306);
INSERT provinces(provincename,peoplenumber) VALUES('甘肃',2418);
INSERT provinces(provincename,peoplenumber) VALUES('山西',4506);
INSERT provinces(provincename,peoplenumber) VALUES('内蒙古',3103);
INSERT provinces(provincename,peoplenumber) VALUES('陕西',2668);
INSERT provinces(provincename,peoplenumber) VALUES('吉林',1722);
INSERT provinces(provincename,peoplenumber) VALUES('福建',184);
INSERT provinces(provincename,peoplenumber) VALUES('贵州',623);
INSERT provinces(provincename,peoplenumber) VALUES('广东',218);
INSERT provinces(provincename,peoplenumber) VALUES('青海',205);
INSERT provinces(provincename,peoplenumber) VALUES('西藏',674);
INSERT provinces(provincename,peoplenumber) VALUES('四川',253);
INSERT provinces(provincename,peoplenumber) VALUES('宁夏',3);
INSERT provinces(provincename,peoplenumber) VALUES('海南',165);
INSERT provinces(provincename,peoplenumber) VALUES('台湾',48);
INSERT provinces(provincename,peoplenumber) VALUES('香港',113);
INSERT provinces(provincename,peoplenumber) VALUES('澳门',550);