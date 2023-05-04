import { Button, Checkbox, Form, Input } from "antd";
import styles from "./login.module.scss";
import { login, getCache } from "@/api/login.js";

const onFinish = (values) => {
  console.log("Success:", values);
  let data = {
    tel: String(values.tel),
    password: String(values.password),
  };
  // getCache().then(res => {
  //   console.log(res)
  // })
  // return
  login(data).then((res) => {
    console.log(res);
  });
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Signin = () => (
  <div className={styles.thePage}>
    <Form
      labelAlign="left"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        width: "400px",
        padding: "20px",
      }}
      className={styles.formBorder}
      initialValues={{
        password: 123456,
        tel: 15681311971,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>Sign in</h1>
      <Form.Item
        label="Tel"
        name="tel"
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <h1 className={styles.loginBtn}>
        <a className={styles.link} href="">
          忘记密码?
        </a>
        <Button style={{ width: "100px" }} type="primary" htmlType="submit">
          Submit
        </Button>
        <a className={styles.link} href="">
          注册用户
        </a>
      </h1>
    </Form>
  </div>
);
export default Signin;
