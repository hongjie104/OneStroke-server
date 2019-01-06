const moment = require('moment');
const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    /**
     * 获取当前时间
     * @param {Date} date 日期，可选
     * @return {Date} 日期
     */
    now(date) {
        // 因为mongo里存的时间啊是UTC +0:00的，而中国是UTC +8:00，所以这里要加8小时
        return moment(date || new Date()).add(8, 'hours');
    },

    /**
     * 将数据库中的日期转成时间戳
     * @param {Date} date Date类型
     * @return {Number} 时间戳
     */
    toTimestamp(date) {
        return date ? parseInt(moment(date).subtract(8, 'hours').format('x')) : 0;
    },

    // asyncRequest(url, headers, form, method = 'POST') {
    //     return new Promise((resolve, reject) => {
    //         request({
    //             url,
    //             headers,
    //             form,
    //             method,
    //         }, (err, response, body) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(response, body);
    //             }
    //         });
    //     });
    // },

    /**
     * 判断是否为undefined
     * @param {Any} val 任何实例
     * @return {Bool} 结果
     */
    isUndefined(val) {
        return typeof val === 'undefined';
    },

    toInt(val, defaultValue = 0) {
        val = parseInt(val);
        if (isNaN(val)) {
            val = defaultValue;
        }
        return val;
    },

    /**
     * 等待
     * @param {Number} time 时间，单位毫秒
     * @return {Promise} Promise
     */
    wait(time = 1000) {
        return new Promise(resolve => {
            const t = setTimeout(() => {
                clearTimeout(t);
                resolve();
            }, time);
        });
    },

    /**
     * 写文件
     * @param {String} filePath 文件路径
     * @param {String} content 内容
     * @return {Promise} Promise
     */
    writeFile(filePath, content) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, content, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },

    /**
     * 下载图片
     * @param {String} url 图片url
     * @param {String} filePath 本地地址
     * @return {Promise} Promise
     */
    downloadImg(url, filePath) {
        return new Promise((resolve, reject) => {
            if (fs.existsSync(filePath)) {
                resolve(2);
                return;
            }
            const a = filePath.split(path.sep);
            a.pop();
            const fileDir = a.join(path.sep);
            if (!fs.existsSync(fileDir)) {
                fs.mkdirSync(fileDir);
            }
            request.head(url, () => {
                const stream = request(url).pipe(fs.createWriteStream(filePath));
                stream.on('finish', () => {
                    resolve(1);
                });
                stream.on('error', () => {
                    reject();
                });
            });
        });
    },

    // 去除数组的重复成员
    unique(array) {
        return [ ...new Set(array) ];
    },

    isObjectId(_id) {
        if (_id) {
            return /\w{24}/.test(_id);
        }
        return false;
    },

    // 格式化商品的number
    formatGoodsNumber(number) {
        if (/\w{6}[\s\-]?\w{3}/.test(number)) {
            number = number.replace(' ', '-').toLocaleUpperCase();
            if (number.length === 9) {
                number = number.substr(0, 6) + '-' + number.substr(6);
            }
        }
        return number;
    },

    randomStr(length = 16) {
        const chatArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const l = chatArr.length;
        let str = '';
        while (str.length < length) {
            str += chatArr[random = Math.floor(Math.random() * l)];
        }
        return str;
    },
};
