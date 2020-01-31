export const transValidation = {
  email_incorrect: 'Email phải có dạng: abc@email.com',
  gender_incorrect: 'Ủa, tại sao trường giới tính lại bị sai?',
  password_incorrect: 'Mật khẩu phải chứa ít nhất 8 kí tự, bao gồm chữ hoa, chữ thường, và kí tự đặc biệt',
  password_confimation_incorrect: 'Nhập lại mật khẩu chưa chính xác',
}

export const transErrors = {
  email_is_be_used: 'Email này đã được sử dụng, vui lòng kiểm tra lại!',
  email_is_be_deleted: 'Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin đây là hiểu lầm, vui lòng liên hệ với Administrator để tiến hành kiểm tra lại. Xin cảm ơn!',
  email_is_not_be_actived: 'Tài khoản này chưa được kích hoạt, vui lòng đăng nhập vào email và tiến hành kích hoạt. Xin cảm ơn!',
}

export const transSuccesses = {
  userCreated: (email) => `<h1>Tài khoản <strong>${email}</strong> đã được đăng kí thành công, vui lòng kiểm tra email để active tài khoản và đăng nhập. Xin cảm ơn!</h1>.
  `,
}