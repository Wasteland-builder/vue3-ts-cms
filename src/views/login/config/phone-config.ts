// 编写手机、验证码校验规则
export const rules = {
  num: [
    {
      required: true,
      message: '手机号是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号为11位哦~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码为6位哦~',
      trigger: 'blur'
    }
  ]
}
