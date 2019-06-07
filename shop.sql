/*
Navicat MySQL Data Transfer

Source Server         : shop
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-04-15 16:15:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify` (
  `classify_id` int(100) NOT NULL AUTO_INCREMENT,
  `classify_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`classify_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classify
-- ----------------------------
INSERT INTO `classify` VALUES ('1', '家用电器');
INSERT INTO `classify` VALUES ('2', '手机数码');
INSERT INTO `classify` VALUES ('3', '电脑办公');
INSERT INTO `classify` VALUES ('4', '家居家纺');
INSERT INTO `classify` VALUES ('5', '男装女装');
INSERT INTO `classify` VALUES ('6', '鞋靴箱包');
INSERT INTO `classify` VALUES ('7', '个人化妆');
INSERT INTO `classify` VALUES ('8', '母婴玩具');
INSERT INTO `classify` VALUES ('9', '图书影像');
INSERT INTO `classify` VALUES ('10', '休闲运动');
INSERT INTO `classify` VALUES ('11', '腕表珠宝');
INSERT INTO `classify` VALUES ('12', '汽车汽配');
INSERT INTO `classify` VALUES ('13', '食品酒水');
INSERT INTO `classify` VALUES ('14', '保健器械');
INSERT INTO `classify` VALUES ('15', '营养滋补');
INSERT INTO `classify` VALUES ('16', '礼品卡券');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(100) NOT NULL AUTO_INCREMENT,
  `classify_id` int(10) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_img_url` varchar(255) DEFAULT NULL,
  `product_dprice` decimal(10,2) DEFAULT NULL,
  `product_detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '1', '索尼', '3499.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490209495581.jpg', '3699.00', 'Sony/索尼 KDL-48W650D 48英寸液晶高清 wifi网络 平板电视 正品保证 三期免息 咨询有礼 售后上门');
INSERT INTO `product` VALUES ('2', '1', '康佳', '4999.00', 'http://test.dscmall.cn/images/201703/goods_img/0_P_1490209464414.jpg', '5999.00', '康佳kktv U65 65英寸4K超高清安卓智能网络平板led液晶电视机6070 4k超高清 6ms响应 多屏互动                                        ');
INSERT INTO `product` VALUES ('3', '2', '小米手环', '149.00', 'http://test.dscmall.cn/images/201703/goods_img/0_P_1490155421265.jpg', '179.00', '小米手环2蓝牙智能男女情侣运动计步器睡眠心率检测器手表支持IOS 精准心率监测 超长续航 触摸操作');
INSERT INTO `product` VALUES ('4', '2', '小米手环1', '149.00', 'http://test.dscmall.cn/images/201703/goods_img/0_P_1490155421265.jpg', '169.00', '小米手环2蓝牙智能男女情侣运动计步器睡眠心率检测器手表支持IOS 精准心率监测 超长续航 触摸操作');
INSERT INTO `product` VALUES ('5', '1', '空调', '4199.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490175614721.jpg', '5038.80', 'AUX/奥克斯 3匹除湿大功率广角送风空调立柜机 KFR-72LW/NSP1+3 自动升降面板 商居两用');
INSERT INTO `product` VALUES ('6', '1', '冰箱', '7999.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490175463945.jpg', '9800.00', 'SIEMENS/西门子 KA92NV66TI 双开门双门对开门家用变频无霜电冰箱');
INSERT INTO `product` VALUES ('7', '3', '电脑', '1661.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490159412396.jpg', '1666.00', '电脑');
INSERT INTO `product` VALUES ('8', '4', '餐具', '200.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490161056336.jpg', '200.00', '餐具');
INSERT INTO `product` VALUES ('9', '5', '女装', '100.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490174894779.jpg', '200.00', '女装');
INSERT INTO `product` VALUES ('10', '6', '箱包', '200.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490209163537.jpg', '220.00', '箱包');
INSERT INTO `product` VALUES ('11', '7', '造型', '80.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489105083498.jpg', '100.00', '造型');
INSERT INTO `product` VALUES ('12', '8', '奶粉', '100.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '120.00', '奶粉');
INSERT INTO `product` VALUES ('13', '9', '科普', '20.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '30.00', '科普');
INSERT INTO `product` VALUES ('14', '10', '跑步鞋', '999.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '1299.00', '跑步鞋');
INSERT INTO `product` VALUES ('15', '11', '时尚饰品', '222.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '333.00', '时尚饰品');
INSERT INTO `product` VALUES ('16', '12', '车载导航', '565.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '600.00', '车载导航');
INSERT INTO `product` VALUES ('17', '13', '新疆', '30.00', 'http://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1490165304408.jpg', '40.00', '新疆');
INSERT INTO `product` VALUES ('18', '14', '维生素', '30.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '60.00', '维生素');
INSERT INTO `product` VALUES ('19', '15', '芦荟', '80.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '200.00', '芦荟');
INSERT INTO `product` VALUES ('20', '16', '酒店', '600.00', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg', '1200.00', '酒店');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `login_password` varchar(255) NOT NULL,
  `user_number` int(20) DEFAULT NULL,
  `pay_password` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'llr', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `user` VALUES ('2', 'aaa', 'e10adc3949ba59abbe56e057f20f883e', null, '1234567890', 'http://test.dscmall.cn/mobile/public/img/no_image.jpg');
INSERT INTO `user` VALUES ('3', 'admin', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `user` VALUES ('4', 'abc', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `user` VALUES ('5', 'abab', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `user` VALUES ('6', 'aaaa', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `user` VALUES ('7', 'bbb', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
