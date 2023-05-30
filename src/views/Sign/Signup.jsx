import { Button, Checkbox, Form, Input, Image } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import styles from "./signup.module.scss";
import { useEffect, useState } from "react";
import { getCache, register } from "@/api/login.js";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Signin = () => {
  const [src, setSrc] = useState("");
  const [captchaId, setCaptchaId] = useState("");
  const nav = useNavigate();

  const onFinish = async (values) => {
    let form = {};
    for (const key in values) {
      form[key] = values[key];
    }
    form.captchaId = captchaId;
    let { code, msg } = await register(form).catch((err) => console.log(err));
    if (code === 200) {
      nav("/signin");
    }
  };

  async function sendCache() {
    let { data } = await getCache().catch((err) => console.log(err));
    setSrc(data.picPath);
    setCaptchaId(data.captchaId);
  }

  useEffect(() => {
    console.log(333);
    sendCache();
  }, []);

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
          password: "123456",
          tel: "15681311971",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Sign up</h1>
        <Form.Item
          label="用户名"
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
          label="密码"
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

        <Form.Item
          label="确认密码"
          name="checkPwd"
          rules={[
            {
              required: true,
              message: "请再次输入密码",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="captcha"
          rules={[
            {
              required: true,
              message: "请输入验证码",
            },
          ]}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input style={{ width: "150px" }} />
            <Image
              style={{ marginLeft: "10px" }}
              preview={false}
              width={150}
              src={src}
            />
            <Button type="link" onClick={() => sendCache()}>
              <ReloadOutlined></ReloadOutlined>
            </Button>
          </div>
        </Form.Item>

        <h1 className={styles.comfirmBtn}>
          <Button style={{ width: "100px" }} type="primary" htmlType="submit">
            注册
          </Button>
        </h1>
      </Form>
    </div>
  );
};
export default Signin;
