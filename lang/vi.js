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
  login_failed: 'Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại. ',
  server_error: 'Server hiện đang không hoạt động đúng cách. Vui lòng thử lại sau. Xin lỗi vì sự bất tiện này.',
}

export const transSuccesses = {
  userCreated: (email) => `Tài khoản <strong>${email}</strong> đã được đăng kí thành công, vui lòng kiểm tra email để active tài khoản và đăng nhập. Xin cảm ơn!.
  `,
  active_Success: 'Verify successfully. Bạn có thể đăng nhập vào ứng dụng.',
  active_Fail: 'Verify Fail. Vui lòng kiểm tra lại. Xin cảm ơn.',
  token_undefined: 'Token không tồn tại.',
  login_success: (username) => `Xin chào ${username}, chúc bạn một ngày mới tốt lành.`,
  logout_success: "Đăng xuất tài khoản thành công, hẹn gặp lại bạn!"
}

export const transMailer = {
  subject: '<b>Awesome Chat: Xác nhận kích hoạt tài khoản. </b>',
  template: (linkVerify) => `<h2>Bạn nhận được email này vì đã đăng kí tài khoản trên ứng dụng Awesome Chat.</h2>
  <h3>Vui lòng click vào liên kết bên dưới để xác nhận.</h3>
  <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
  <h4>Nếu tin rằng email này là nhầm lẫn, xin hãy bỏ qua nó. Trân trọng.</h4>
  `,
}
