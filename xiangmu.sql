/*
 Navicat Premium Data Transfer

 Source Server         : h51905
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : xiangmu

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 15/07/2019 14:00:54
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for carelist
-- ----------------------------
DROP TABLE IF EXISTS `carelist`;
CREATE TABLE `carelist`  (
  `gid` int(4) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shop` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `kucun` int(4) NULL DEFAULT NULL,
  `price` int(10) NULL DEFAULT NULL,
  `num` int(4) NULL DEFAULT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgs` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 142 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carelist
-- ----------------------------
INSERT INTO `carelist` VALUES (3, '52°五粮液普五水晶盒500ml', '中酒自营', 9, 1099, 1, 140, '15915555510', '7.png');
INSERT INTO `carelist` VALUES (2, '42度天佑德青稞酒小黑125ml×4', '天佑德互助南街专卖店', 8, 100, 1, 136, '15914222210', '4.png');
INSERT INTO `carelist` VALUES (1, '天佑德小黑（6装礼盒）加强版', '天佑德西宁机场专卖店', 10, 100, 2, 137, 'local', '1.png');
INSERT INTO `carelist` VALUES (7, '天佑德小黑（6装礼盒）加强版', '天佑德互助南街专卖店', 5, 100, 1, 138, '15914222212', '1.png');
INSERT INTO `carelist` VALUES (8, '42度天佑德青稞酒小黑125ml×4', '中酒自营', 3, 119, 1, 141, '15915555510', '18.png');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list`  (
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(255) NULL DEFAULT NULL,
  `col2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `SN` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgs` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `kucun` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`gid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 60 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('天佑德小黑（6装礼盒）加强版', 100, '21747', '天佑德西宁机场专卖店', '1.png&2.png&3.png', '10', 1);
INSERT INTO `list` VALUES ('42度天佑德青稞酒小黑125ml×4', 100, '11358', '天佑德互助南街专卖店', '4.png&5.png&6.png', '8', 2);
INSERT INTO `list` VALUES ('52°五粮液普五水晶盒500ml', 1099, '8034', '中酒自营', '7.png&8.png&9.png', '9', 3);
INSERT INTO `list` VALUES ('53°茅台酒股份公司王子酒 500ml', 228, '4525', '中酒自营', '10.png&12.png&11.png', '8', 4);
INSERT INTO `list` VALUES ('53°茅台酒股份公司迎宾酒（旧包装） 500ml', 128, '3898', '中酒自营', '13.png&14.png&15.png', '7', 5);
INSERT INTO `list` VALUES ('42度天佑德青稞酒岩窖30 500ml', 188, '4205', '天佑德西宁机场专卖店', '16.png&15.png', '4', 6);
INSERT INTO `list` VALUES ('天佑德小黑（6装礼盒）加强版', 100, '5243', '天佑德互助南街专卖店', '1.png&2.png', '5', 7);
INSERT INTO `list` VALUES ('42度天佑德青稞酒小黑125ml×4', 119, '3239', '中酒自营', '18.png&21.png&16.png', '3', 8);
INSERT INTO `list` VALUES ('42度七彩互助青稞酒 500ml', 85, '3134', '天佑德西宁虎台专卖店', '17.png&20.png&19.png', '2', 9);
INSERT INTO `list` VALUES ('52°剑南春500ml', 469, '2777', '中酒自营', '24.png&23.png&20.png', '1', 10);
INSERT INTO `list` VALUES ('42度天佑德出口型16版750ml', 198, '5958', '天佑德西宁虎台专卖店', '25.png&26.png', '5', 11);
INSERT INTO `list` VALUES ('52°泸州老窖头曲500ml', 88, '2600', '中酒自营', '27.png&28.png&29.png', '8', 12);
INSERT INTO `list` VALUES ('46度天佑德青稞酒纯净型P7 750ml', 88, '6012', '天佑德互助南街专卖店', '31.png&30.png&32.png', '7', 13);
INSERT INTO `list` VALUES ('53°茅台迎宾酒（2013新版）500ml', 138, '2521', '中酒自营', '18.png&32.png', '9', 14);
INSERT INTO `list` VALUES ('52°白标西凤酒500ml', 158, '2491', '中酒自营', '33.png&34.png&35.png', '10', 15);
INSERT INTO `list` VALUES ('43°茅台酒股份公司迎宾酒 500ml', 108, '2257', '中酒自营', '36.png&37.png&38.png', '5', 16);
INSERT INTO `list` VALUES ('42度天佑德青稞酒出口型750ml', 189, '2537', '西宁万华平价超市', '39.png&40.png&41.png', '6', 17);
INSERT INTO `list` VALUES ('53°茅台酒股份公司王子-酱门经典（新包装） 500ml', 288, '2180', '中酒自营', '42.png&43.png', '8', 18);
INSERT INTO `list` VALUES ('42度天佑德小黑青稞酒品鉴酒 125ml', 30, '2230', '中酒自营', '44.png&45.png&46.png', '9', 19);
INSERT INTO `list` VALUES ('42度天佑德青稞酒小黑125ml×4', 100, '3180', '西客站专卖店', '47.png&48.png&49.png', '4', 20);
INSERT INTO `list` VALUES ('42度天佑德青稞酒17版红四天500ml', 88, '3720', '天佑德西宁虎台专卖店', '50.png&52.png&51.png', '5', 21);
INSERT INTO `list` VALUES ('互助纯净P7', 88, '2053', '天佑德西街专卖店', '1.png&2.png', '7', 22);
INSERT INTO `list` VALUES ('42度七彩互助青稞酒 500ml', 85, '1917', '天佑德互助南街专卖店', '52.png&53.png&54.png', '2', 23);
INSERT INTO `list` VALUES ('42度天佑德出口型16版750ml', 198, '2846', '天佑德西宁机场专卖店', '55.png&56.png&57.png', '25', 24);
INSERT INTO `list` VALUES ('52°洋河梦之蓝M3梦3 500ml', 518, '1436', '中酒自营', '58.png&59.png&60.png', '5', 25);
INSERT INTO `list` VALUES ('46度天佑德青稞酒纯净型P7 750ml', 88, '1995', '天佑德西宁虎台专卖店', '61.png&62.png&63.png', '8', 26);
INSERT INTO `list` VALUES ('互助大曲', 25, '1302', '天佑德西街专卖店', '2.png&3.png', '6', 27);
INSERT INTO `list` VALUES ('天佑德52度青稞酒（红五星）500ml', 139, '1431', '天佑德西宁虎台专卖店', '64.png&65.png&66.png', '1', 28);
INSERT INTO `list` VALUES ('42度天佑德青稞酒小黑125ml', 30, '1732', '中酒连锁河津市旗舰店', '67.png&68.png&69.png', '5', 29);
INSERT INTO `list` VALUES ('52°小糊涂仙500ml', 270, '1172', '中酒自营', '1.png&2.png', '2', 30);
INSERT INTO `list` VALUES ('46度天佑德青稞酒金标出口型750ml', 378, '1879', '天佑德西宁机场专卖店', '71.png&72.png&73.png', '5', 31);
INSERT INTO `list` VALUES ('42°红盖汾  475ml', 38, '2033', '中酒连锁河津市旗舰店', '74.png&72.png&76.png', '4', 32);
INSERT INTO `list` VALUES ('42度七彩互助青稞酒 500ml', 85, '1189', '天佑德西街专卖店', '75.png&77.png&78.png', '8', 33);
INSERT INTO `list` VALUES ('52°白标西凤酒 500ml（6瓶装）', 948, '1072', '中酒自营', '15.png&28.png&39.png', '7', 34);
INSERT INTO `list` VALUES ('46度互助青稞酒4A八大作坊500ml', 135, '1192', '天佑德西宁虎台专卖店', '14.png&12.png', '9', 35);
INSERT INTO `list` VALUES ('42度天佑德青稞酒17版红四天500ml', 88, '2452', '天佑德互助南街专卖店', '79.png&80.png&81.png', '5', 36);
INSERT INTO `list` VALUES ('44度天佑德青稞酒银标出口型750ml', 205, '1817', '天佑德西宁机场专卖店', '81.png&82.png&83.png', '8', 37);
INSERT INTO `list` VALUES ('42度天佑德青稞酒福酒F6 500ml', 145, '1207', '西宁万华平价超市', '84.png&85.png&86.png', '9', 38);
INSERT INTO `list` VALUES ('53°茅台王子酒 500ml（6瓶装）', 1368, '978', '中酒自营', '50.png&52.png&53.png', '4', 39);
INSERT INTO `list` VALUES ('42度天佑德青稞酒福酒F6 500ml', 145, '1771', '天佑德西宁虎台专卖店', '61.png&62.png&63.png', '5', 40);
INSERT INTO `list` VALUES ('53°茅台迎宾酒（旧包装） 500ml（6瓶装）', 768, '974', '中酒自营', '21.png&22.png&23.png', '5', 41);
INSERT INTO `list` VALUES ('42度天佑德青稞酒岩窖30 500ml', 188, '3993', '天佑德西宁虎台专卖店', '31.png&32.png&33.png', '6', 42);
INSERT INTO `list` VALUES ('45度10版八年互助坛头酒500ml', 53, '1036', '天佑德格尔木专卖店', '10.png&20.png&30.png', '7', 43);
INSERT INTO `list` VALUES ('42度天佑德青稞酒17版红四天500ml', 88, '1913', '天佑德西街专卖店', '11.png&12.png&13.png', '8', 44);
INSERT INTO `list` VALUES ('52°泸州老窖国窖1573 500ml', 968, '823', '中酒自营', '87.png&88.png&89.png', '9', 45);
INSERT INTO `list` VALUES ('42°天佑德-E168', 36, '1053', '西宁万佳乐超市', '90.png&92.png&93.png', '5', 46);
INSERT INTO `list` VALUES ('42度天佑德青稞酒小黑125ml×4', 100, '1178', '天佑德小黑青稞酒', '91.png&82.png&83.png', '4', 47);
INSERT INTO `list` VALUES ('52°泸州老窖头曲 500ml（2瓶装）', 176, '750', '中酒自营', '11.png&12.png&13.png', '6', 48);
INSERT INTO `list` VALUES ('67°衡水老白干蓝花瓷 500ml', 79, '774', '中酒自营', '15.png&25.png&35.png', '8', 49);
INSERT INTO `list` VALUES ('43°茅台迎宾酒 500ml（6瓶装）', 648, '740', '中酒自营', '11.png&21.png&31.png', '5', 50);
INSERT INTO `list` VALUES ('45度天佑德青稞酒生态三星500ml', 68, '774', '天佑德互助南街专卖店', '12.png&22.png&32.png', '7', 51);
INSERT INTO `list` VALUES ('46度互助青稞酒天赐八大作坊500ml', 150, '703', '天佑德西宁虎台专卖店', '13.png&32.png&33.png', '9', 52);
INSERT INTO `list` VALUES ('44度天佑德青稞酒银标出口型750ml', 268, '1361', '天佑德西宁虎台专卖店', '41.png&24.png&34.png', '5', 53);
INSERT INTO `list` VALUES ('46°洋河天之蓝 480ml', 318, '655', '中酒自营', '15.png&52.png&35.png', '8', 54);
INSERT INTO `list` VALUES ('52度天佑德青稞酒生态五星500ml', 148, '903', '天佑德互助南街专卖店', '16.png&62.png&36.png', '5', 55);
INSERT INTO `list` VALUES ('52°泸州老窖头曲 500ml（6瓶装）', 528, '673', '中酒自营', '17.png&72.png&37.png', '7', 56);
INSERT INTO `list` VALUES ('42度天佑德有机青稞酒金宝500ml', 358, '1607', '天佑德西宁机场专卖店', '18.png&82.png&38.png', '8', 57);
INSERT INTO `list` VALUES ('52°泸州老窖特曲500ml', 248, '627', '中酒自营', '19.png&92.png&39.png', '9', 58);
INSERT INTO `list` VALUES ('46度天佑德青稞酒金标出口型750ml', 378, '1283', '天佑德西宁虎台专卖店', '1.png&2.png&3.png', '5', 59);

-- ----------------------------
-- Table structure for orderlist
-- ----------------------------
DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist`  (
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `col2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `SN` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gid` int(4) NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `kucun` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`gid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 63 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderlist
-- ----------------------------
INSERT INTO `orderlist` VALUES ('天佑德小黑（6装礼盒）加强版', '￥100.00', '21747', '天佑德西宁机场专卖店', 1, '1.png&2.png', '8');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒小黑125ml×4', '￥100.00', '11358', '天佑德互助南街专卖店', 2, '3.png&4.png&5.png&6.png', '7');
INSERT INTO `orderlist` VALUES ('52°五粮液普五水晶盒500ml', '￥1099.00', '8034', '中酒自营', 3, '7.png&8.png&9.png', '6');
INSERT INTO `orderlist` VALUES ('53°茅台酒股份公司王子酒 500ml', '￥228.00', '4525', '中酒自营', 4, '10.png&11.png', '5');
INSERT INTO `orderlist` VALUES ('53°茅台酒股份公司迎宾酒（旧包装） 500ml', '￥128.00', '3898', '中酒自营', 5, '12.png&13.png', '4');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒岩窖30 500ml', '￥188.00', '4205', '天佑德西宁机场专卖店', 6, '14.png&15.png&16.png', '0');
INSERT INTO `orderlist` VALUES ('天佑德小黑（6装礼盒）加强版', '￥100.00', '5243', '天佑德互助南街专卖店', 7, '17.png&18.png', '5');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒小黑125ml×4', '￥119.00', '3239', '中酒自营', 8, '19.png&20.png&21.png', '4');
INSERT INTO `orderlist` VALUES ('42度七彩互助青稞酒 500ml', '￥85.00', '3134', '天佑德西宁虎台专卖店', 9, '22.png&23.png&24.png', '10');
INSERT INTO `orderlist` VALUES ('52°剑南春500ml', '￥469.00', '2777', '中酒自营', 10, '25.png&26.png&27.png', '2');
INSERT INTO `orderlist` VALUES ('42度天佑德出口型16版750ml', '￥198.00', '5958', '天佑德西宁虎台专卖店', 11, '28.png&29.png', '5');
INSERT INTO `orderlist` VALUES ('52°泸州老窖头曲500ml', '￥88.00', '2600', '中酒自营', 12, '30.png&31.png&32.png', '8');
INSERT INTO `orderlist` VALUES ('46度天佑德青稞酒纯净型P7 750ml', '￥88.00', '6012', '天佑德互助南街专卖店', 13, '33.png&34.png&24.png', '7');
INSERT INTO `orderlist` VALUES ('53°茅台迎宾酒（2013新版）500ml', '￥138.00', '2521', '中酒自营', 14, '35.png&36.png', '9');
INSERT INTO `orderlist` VALUES ('52°白标西凤酒500ml', '￥158.00', '2491', '中酒自营', 15, '37.png&38.png&39.png', '5');
INSERT INTO `orderlist` VALUES ('43°茅台酒股份公司迎宾酒 500ml', '￥108.00', '2257', '中酒自营', 16, '40.png&41.png&42.png', '2');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒出口型750ml', '￥189.00', '2537', '西宁万华平价超市', 17, '45.png&44.png&43.png', '4');
INSERT INTO `orderlist` VALUES ('53°茅台酒股份公司王子-酱门经典（新包装） 500ml', '￥288.00', '2180', '中酒自营', 18, '46.png&47.png', '7');
INSERT INTO `orderlist` VALUES ('42度天佑德小黑青稞酒品鉴酒 125ml', '￥30.00', '2230', '中酒自营', 19, '48.png&49.png&50.png', '8');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒小黑125ml×4', '￥100.00', '3180', '西客站专卖店', 20, '51.png&53.png&52.png', '6');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒17版红四天500ml', '￥88.00', '3720', '天佑德西宁虎台专卖店', 21, '54.png&23.png&55.png', '3');
INSERT INTO `orderlist` VALUES ('互助纯净P7', '￥88.00', '2053', '天佑德西街专卖店', 22, '57.png&56.png', '2');
INSERT INTO `orderlist` VALUES ('42度七彩互助青稞酒 500ml', '￥85.00', '1917', '天佑德互助南街专卖店', 23, '59.png&60.png&58.png', '5');
INSERT INTO `orderlist` VALUES ('42度天佑德出口型16版750ml', '￥198.00', '2846', '天佑德西宁机场专卖店', 24, '61.png&62.png&63.png', '7');
INSERT INTO `orderlist` VALUES ('52°洋河梦之蓝M3梦3 500ml', '￥518.00', '1436', '中酒自营', 25, '64.png&65.png', '5');
INSERT INTO `orderlist` VALUES ('46度天佑德青稞酒纯净型P7 750ml', '￥88.00', '1995', '天佑德西宁虎台专卖店', 26, '22.png&23.png&24.png', '10');
INSERT INTO `orderlist` VALUES ('互助大曲', '￥25.00', '1302', '天佑德西街专卖店', 27, '66.png&67.png&68.png', '11');
INSERT INTO `orderlist` VALUES ('天佑德52度青稞酒（红五星）500ml', '￥139.00', '1431', '天佑德西宁虎台专卖店', 28, '69.png&70.png&71.png', '25');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒小黑125ml', '￥30.00', '1732', '中酒连锁河津市旗舰店', 29, '72.png&23.png&24.png', '8');
INSERT INTO `orderlist` VALUES ('52°小糊涂仙500ml', '￥270.00', '1172', '中酒自营', 30, '73.png&23.png&24.png', '9');
INSERT INTO `orderlist` VALUES ('46度天佑德青稞酒金标出口型750ml', '￥378.00', '1879', '天佑德西宁机场专卖店', 31, '74.png&23.png&24.png', '10');
INSERT INTO `orderlist` VALUES ('42°红盖汾  475ml', '￥38.00', '2033', '中酒连锁河津市旗舰店', 32, '75.png&23.png&24.png', '11');
INSERT INTO `orderlist` VALUES ('42度七彩互助青稞酒 500ml', '￥85.00', '1189', '天佑德西街专卖店', 33, '76.png&23.png&24.png', '5');
INSERT INTO `orderlist` VALUES ('52°白标西凤酒 500ml（6瓶装）', '￥948.00', '1072', '中酒自营', 34, '77.png&23.png&24.png', '6');
INSERT INTO `orderlist` VALUES ('46度互助青稞酒4A八大作坊500ml', '￥135.00', '1192', '天佑德西宁虎台专卖店', 35, '78.png&23.png&24.png', '78');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒17版红四天500ml', '￥88.00', '2452', '天佑德互助南街专卖店', 36, '79.png&23.png&24.png', '8');
INSERT INTO `orderlist` VALUES ('44度天佑德青稞酒银标出口型750ml', '￥268.00', '1817', '天佑德西宁机场专卖店', 37, '80.png&23.png&24.png', '10');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒福酒F6 500ml', '￥145.00', '1207', '西宁万华平价超市', 38, '81.png&23.png&24.png', '2');
INSERT INTO `orderlist` VALUES ('53°茅台王子酒 500ml（6瓶装）', '￥1368.00', '978', '中酒自营', 39, '82.png&23.png&24.png', '14');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒福酒F6 500ml', '￥145.00', '1771', '天佑德西宁虎台专卖店', 40, '83.png&23.png&24.png', '17');
INSERT INTO `orderlist` VALUES ('53°茅台迎宾酒（旧包装） 500ml（6瓶装）', '￥768.00', '974', '中酒自营', 41, '84.png&23.png&24.png', '58');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒岩窖30 500ml', '￥188.00', '3993', '天佑德西宁虎台专卖店', 42, '85.png&23.png&24.png', '98');
INSERT INTO `orderlist` VALUES ('45度10版八年互助坛头酒500ml', '￥53.00', '1036', '天佑德格尔木专卖店', 43, '86.png&23.png&24.png', '51');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒17版红四天500ml', '￥88.00', '1913', '天佑德西街专卖店', 44, '87.png&23.png&24.png', '10');
INSERT INTO `orderlist` VALUES ('52°泸州老窖国窖1573 500ml', '￥969.00', '823', '中酒自营', 45, '88.png&23.png&24.png', '5');
INSERT INTO `orderlist` VALUES ('42°天佑德-E168', '￥36.00', '1053', '西宁万佳乐超市', 46, '89.png&23.png&24.png', '8');
INSERT INTO `orderlist` VALUES ('42度天佑德青稞酒小黑125ml×4', '￥100.00', '1178', '天佑德小黑青稞酒', 47, '10.png&23.png&24.png', '7');
INSERT INTO `orderlist` VALUES ('52°泸州老窖头曲 500ml（2瓶装）', '￥176.00', '750', '中酒自营', 49, '11.png&23.png&24.png', '9');
INSERT INTO `orderlist` VALUES ('67°衡水老白干蓝花瓷 500ml', '￥79.00', '774', '中酒自营', 50, '12.png&23.png&24.png', '5');
INSERT INTO `orderlist` VALUES ('43°茅台迎宾酒 500ml（6瓶装）', '￥648.00', '740', '中酒自营', 51, '13.png&23.png&24.png', '2');
INSERT INTO `orderlist` VALUES ('45度天佑德青稞酒生态三星500ml', '￥68.00', '774', '天佑德互助南街专卖店', 52, '14.png&23.png&24.png', '1');
INSERT INTO `orderlist` VALUES ('46度互助青稞酒天赐八大作坊500ml', '￥150.00', '703', '天佑德西宁虎台专卖店', 53, '90.png&23.png&24.png', '4');
INSERT INTO `orderlist` VALUES ('44度天佑德青稞酒银标出口型750ml', '￥268.00', '1361', '天佑德西宁虎台专卖店', 54, '91.png&23.png&24.png', '8');
INSERT INTO `orderlist` VALUES ('46°洋河天之蓝 480ml', '￥318.00', '655', '中酒自营', 55, '15.png&23.png&24.png', '9');
INSERT INTO `orderlist` VALUES ('52度天佑德青稞酒生态五星500ml', '￥148.00', '903', '天佑德互助南街专卖店', 56, '16.png&23.png&24.png', '7');
INSERT INTO `orderlist` VALUES ('52°泸州老窖头曲 500ml（6瓶装）', '￥528.00', '673', '中酒自营', 57, '17.png&23.png&24.png', '8');
INSERT INTO `orderlist` VALUES ('42度天佑德有机青稞酒金宝500ml', '￥358.00', '1607', '天佑德西宁机场专卖店', 58, '18.png&23.png&24.png', '6');
INSERT INTO `orderlist` VALUES ('52°泸州老窖特曲500ml', '￥248.00', '627', '中酒自营', 59, '19.png&23.png&24.png', '3');
INSERT INTO `orderlist` VALUES ('46度天佑德青稞酒金标出口型750ml', '￥378.00', '1283', '天佑德西宁虎台专卖店', 60, '22.png&23.png&24.png', '5');

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist`  (
  `userId` int(8) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES (25, '15914222210', '123456hgW');
INSERT INTO `userlist` VALUES (26, '15914222212', '123456');
INSERT INTO `userlist` VALUES (27, '15914222218', '123456');
INSERT INTO `userlist` VALUES (28, '15914222250', '123456');
INSERT INTO `userlist` VALUES (29, '15914222265', '123456hgW!');
INSERT INTO `userlist` VALUES (30, '15914222217', '123456');
INSERT INTO `userlist` VALUES (31, 'name', 'psw');
INSERT INTO `userlist` VALUES (32, '15914111111', '1hGw#1');
INSERT INTO `userlist` VALUES (33, '15914444410', '123456hgW!');
INSERT INTO `userlist` VALUES (34, '15914555510', '123456hgw');
INSERT INTO `userlist` VALUES (35, '15915555510', '123456');

SET FOREIGN_KEY_CHECKS = 1;
