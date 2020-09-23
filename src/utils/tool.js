// 工具方法
const dayjs = require('dayjs');

import { v4 as uuidv4 } from 'uuid';
export default {
    //EXCEL导出
    exportFile: function(classArr, dowloadName) {
      // classArr表示多个table的类名
      //dowloadName 表示要下载的Excel的名字
      let html = "";
      for (var i = 0; i < classArr.length; i++) {
        html = html + document.querySelector("." + `${classArr[i]}`).outerHTML;
      }
      var htmlTemplate = `
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style>
      table th{
              height: 36px;
              text-align: center;
          }
          table td {
              height: 36px;
              text-align: center;
          }
      </style>
      <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name></x:Name><x:WorksheetOptions><x:Selected/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      </head>
      <body>
        <div class="onlyTable">
          ${html}
          </div>
      </body>
      </html>`;
      var blob = new Blob([htmlTemplate], { type: "application/octet-stream" });
      var link = document.getElementsByTagName("a")[0];
      link.href = URL.createObjectURL(blob);
      link.download = dowloadName + "类报表.xls";
      link.click();
    },
    /**
     * 对象值清空
     * @param {Object} data
     */
    resetForm: data => {
      Object.keys(data).map(key => {
        data[key] = "";
      });
    },
    /**
     * @param {Number} timeStamp 传入的时间戳
     * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
     * 时间戳转时间格式
     */
    getDate: dateStr => {
      var date = new Date();
      if (dateStr) {
        date = new Date(dateStr);
      }
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
  
      var h = date.getHours();
      var mm = date.getMinutes();
      var s = date.getSeconds();
      var ds =
        y +
        "-" +
        (m < 10 ? "0" + m : m + "") +
        "-" +
        (d < 10 ? "0" + d : d + "") +
        " " +
        (h < 10 ? "0" + h : h + "") +
        ":" +
        (mm < 10 ? "0" + mm : mm + "") +
        ":" +
        (s < 10 ? "0" + s : s + "");
      return ds;
    },
    extend: function() {
      var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      if (i === length) {
        return target;
      }
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) {
              continue;
            }
            if (deep && copy && (copyIsArray = Array.isArray(copy))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && Array.isArray(src) ? src : [];
              } else {
                clone = src || {};
              }
              target[name] = this.extend(deep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    },
    replace: function() {
      var target = arguments[0] || {},
        i = 1,
        options,
        name,
        item,
        copy,
        length = arguments.length,
        deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      while (i < length) {
        options = arguments[i];
        if (options !== null && options !== undefined) {
          for (name in target) {
            item = target[name];
            copy = options[name];
            if (target === copy) continue;
            if (
              deep &&
              item &&
              typeof item === "object" &&
              !Array.isArray(item)
            ) {
              target[name] = this.replace(deep, item, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
        i++;
      }
      return target;
    },
    /**
     * 获取URL中参数
     * @param     {[type]}    url [description]
     * @return    {[type]}        [description]
     */
    getRequestParam: function(url) {
      var data = {},
        index,
        len,
        param;
      url = decodeURI(url || location.href);
      index = url.indexOf("?");
      if (index === -1) return data;
      url = url.substr(index + 1);
      url = url.slice(0, url.indexOf("#")).split("&");
      index = 0;
      len = url.length;
      while (index < len) {
        param = url[index].split("=");
        if (param.length > 0) {
          data[param[0]] = param[1];
        }
        index++;
      }
      return data;
    },
    /**
     * 返回对象数组里某个key的所有值
     * @param     {[Array]}    data     [description]
     * @param     {[string]}    key      [description]
     * @param     {Boolean||function}   isfilter [description]
     * @return    {[Array]}             [返回对象数组里某个key的所有值]
     */
    getArrayKeys: function(data, key, callback) {
      var k = 0,
        len = data.length,
        item,
        value,
        res,
        arr = [];
      if (Array.isArray(data) && typeof key === "string") {
        len = data.length;
        while (k < len) {
          item = data[k];
          value = item[key];
          if (
            callback === true &&
            value !== null &&
            value !== undefined &&
            value !== ""
          ) {
            arr.push(value);
          } else if (typeof callback === "function") {
            res = callback.call(item, value, k);
            if (res === false) return arr;
            arr.push(res || value);
          } else {
            arr.push(value);
          }
          k++;
        }
      }
      return arr;
    },
    getObjectKeys: function(items) {
      var k,
        len,
        item,
        data,
        args,
        arr = [];
      if (Array.isArray(items)) {
        args = Array.prototype.slice.call(arguments, 1);
        k = 0;
        len = items.length;
        while (k < len) {
          item = items[k];
          data = {};
          args.map(function(value) {
            data[value] = item[value];
          });
          arr.push(data);
          k++;
        }
      }
      return arr;
    },
    /**
     * 数字转千分位
     * num 需要转换的数字 fixed 小数点保留几位
     */
    thousands: function(num, fixed) {
      if (!fixed) fixed = 2;
      if (typeof num !== "number") num = Number(num);
      if (isNaN(num)) return "";
      num = num.toFixed(fixed).split(".");
      return [num[0].replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,"), num[1]].join(".");
    },
    /**
     * 排序
     * @param {[string]} key
     */
    keysort: function(key) {
      return function(a, b) {
        return Number(b[key] - a[key]);
      };
    },
    //导出表格以流的形式导出处理
    exportForm: function(res, name) {
      const link = document.createElement("a");
      let blob = new Blob([res], { type: "application/vnd.ms-excel" });
      link.style.display = "none";
      link.href = URL.createObjectURL(blob);
      link.download = `${name}` + ".xls"; //下载的文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    flatten: function(arr) {
      while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
      }
      return arr;
    },
    getNumber: function(value) {
      return typeof value === "number" && !isNaN(value);
    },
    /**
     * 根据类型返回正则
     * @param str{string}: 检测的内容
     * @param type{string}: 检测类型
     */
    checkType: function (str, type) {
      const regexp = {
        'ip': /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(str),
        'port': /^(\d|[1-5]\d{4}|6[1-4]\d{3}|65[1-4]\d{2}|655[1-2]\d|6553[1-5])$/.test(str),
        'phone': /^1[3|4|5|6|7|8][0-9]{9}$/.test(str), //手机号
        'number': /^[0-9]+$/.test(str), //是否全数字,
        'email': /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str),
        'IDCard': /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str),
        'url': /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str)
      };
      return regexp[type];
    },
    /**
    * 防抖
    * @param func {*}  执行函数
    * @param wait {*}  节流时间,毫秒
    */
   debounce: (func, wait) => {
     let timeout;
     return function () {
       let context = this;
       let args = arguments;
  
       if (timeout) clearTimeout(timeout);
  
       timeout = setTimeout(() => {
         func.apply(context, args)
       }, wait);
     }
   },
  
   /**
    * 节流
    * @param func {*}  执行函数
    * @param wait {*}  节流时间,毫秒
    */
   throttle: (func, wait) => {
     let previous = 0;
     return function () {
       let now = Date.now();
       let context = this;
       if (now - previous > wait) {
         func.apply(context, arguments);
         previous = now;
       }
     }
   },
   /**
    * [description] localStorage 本地存储
    * @param  {[type]} name [description]
    * @return {[type]}      [description]
    */
   getlocalStorage: function (name) {
      if (!name) return;
      return window.localStorage.getItem(name);
    },
    setlocalStorage: function (name, content) {
      if (!name) return;
      if (typeof content !== 'string') {
        content = JSON.stringify(content);
      }
      window.localStorage.setItem(name, content);
    },
    deletelocalStorage: function (name) {
      if (!name) return;
      window.localStorage.removeItem(name);
    },
    getDateParams:(str,format='YYYY-MM-DD')=>{
        if (!str || str == 'Invalid date') {
            str = ''
        } else {
            str = dayjs(str).format(format)
        }
        return str;
    },
    getNewUuid(){
        return uuidv4().replace(/-/g,"")
    }
  };
  