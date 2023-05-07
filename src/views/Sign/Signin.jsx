import { Button, Checkbox, Form, Input } from "antd";
import styles from "./login.module.scss";
import { login, getCache } from "@/api/login.js";
import { Link, useNavigate, useLocation } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Signin() {
  const nav = useNavigate();
  const loction = useLocation();

  function onFinish(values) {
    console.log("Success:", values);
    let data = {
      tel: String(values.tel),
      password: String(values.password),
    };
    login(data).then((res) => {
      window.localStorage.setItem("token", res.data);
      nav("/");
    });
  }

  return (
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
          <Link className={styles.link} to="/signup">
            注册用户
          </Link>
        </h1>
      </Form>
    </div>
  );
}

export default Signin;
