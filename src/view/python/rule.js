export const rule = {
  // 申请 表
  sq_rule: function (str) {
    let params = {
      applyType: 'FIRST', // FIRST 初次申领  ; RETRAINING 复训申领  ; CHANGE_CERTIFICATE 换证申领,
      allowProjectType: 'HIGH_PRESSURE'
    }
    if (str.indexOf('换证') != -1) {
      params.applyType = 'CHANGE_CERTIFICATE'
    } else if (str.indexOf('换证') != -1) {
      params.applyType = 'RETRAINING'
    }

    if (str.indexOf('低压') != -1) {
      params.allowProjectType = 'LOW_PRESSURE'
    } else if (str.indexOf('电缆') != -1) {
      params.allowProjectType = 'CABLE'
    } else if (str.indexOf('高试') != -1) {
      params.allowProjectType = 'HIGH_TRY'
    } else if (str.indexOf('继保') != -1) {
      params.allowProjectType = 'RELAY_PROTECTION'
    } else if (str.indexOf('其它') != -1) {
      params.allowProjectType = 'OTHER'
    }
    return params
  }
}
