export const generateEmailHTML = ({
    resetToken,
}: {
    resetToken: string;
}) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  data-source-file="../emails/magic-links/aws-verify-email.tsx"
  data-source-line="27"
  dir="ltr"
  lang="en">
  <head
    data-source-file="../emails/magic-links/aws-verify-email.tsx"
    data-source-line="28">
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-j8l4wjhrw-resend.vercel.app/static/aws-logo.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body
    data-source-file="../emails/magic-links/aws-verify-email.tsx"
    data-source-line="29"
    style="background-color:#fff">
    <table
      border="0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      align="center">
      <tbody>
        <tr>
          <td style="background-color:#fff;color:#212121">
            <div
              style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
              data-skip-in-text="true"
              data-source-file="../emails/magic-links/aws-verify-email.tsx"
              data-source-line="30">
              Recuperação de senha
              <div>
               </div>
            </div>
            <table
              align="center"
              width="100%"
              data-source-file="../emails/magic-links/aws-verify-email.tsx"
              data-source-line="31"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:37.5em;padding:20px;margin:0 auto;background-color:#eee">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      data-source-file="../emails/magic-links/aws-verify-email.tsx"
                      data-source-line="32"
                      style="background-color:#fff">
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                              data-source-line="33"
                              style="background-color:#252f3d;color:#fff;display:flex;padding:20px 0;align-items:center;justify-content:center">
                              <tbody>
                                <tr>
                                  <td>
                                    MEGB
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                              data-source-line="41"
                              style="padding:25px 35px">
                              <tbody>
                                <tr>
                                  <td>
                                    <h1
                                      data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                      data-source-line="42"
                                      style="color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:20px;font-weight:bold;margin-bottom:15px">
                                      Verifique seu endereço de e-mail
                                    </h1>
                                    <p
                                      data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                      data-source-line="43"
                                      style="font-size:14px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:24px 0;margin-bottom:14px;margin-top:24px;margin-right:0;margin-left:0">
                                      Você solicitou a redefinição de sua senha. Use o código abaixo para continuar o processo:
                                    </p>
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                      data-source-line="49"
                                      style="display:flex;align-items:center;justify-content:center">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p
                                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                              data-source-line="50"
                                              style="font-size:14px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:0;font-weight:bold;text-align:center;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0">
                                              Código de verificação
                                            </p>
                                            <p
                                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                              data-source-line="52"
                                              style="font-size:36px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:10px 0;font-weight:bold;text-align:center;margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:0">
                                              ${resetToken}
                                            </p>
                                            <p
                                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                              data-source-line="53"
                                              style="font-size:14px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:0px;text-align:center;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px">
                                              Este código é válido por 30 minutos. Se você não solicitou a redefinição, ignore este e-mail. Sua senha permanecerá a mesma.
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr
                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                              data-source-line="58"
                              style="width:100%;border:none;border-top:1px solid #eaeaea" />
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                              data-source-line="59"
                              style="padding:25px 35px">
                              <tbody>
                                <tr>
                                  <td>
                                    <p
                                      data-source-file="../emails/magic-links/aws-verify-email.tsx"
                                      data-source-line="60"
                                      style="font-size:14px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:0px;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px">
                                      MEGB Serviços de aplicações.
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>                 
                    <p
                      data-source-file="../emails/magic-links/aws-verify-email.tsx"
                      data-source-line="66"
                      style="font-size:12px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:24px 0;padding:0 20px;margin-top:24px;margin-right:0;margin-bottom:24px;margin-left:0">
                      Esta é uma mensagem enviada pelos servidores de MEGB serviços e aplicações, endereço etc..
                      <a
                        href="https://amazon.com"
                        data-source-file="../emails/magic-links/aws-verify-email.tsx"
                        data-source-line="71"
                        style="color:#2754C5;text-decoration-line:none;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:14px;text-decoration:underline"
                        target="_blank"
                        >megb.com.br</a
                      >, ajudando você.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`;