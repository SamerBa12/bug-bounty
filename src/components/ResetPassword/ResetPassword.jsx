import {
  Button,
  Modal,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

export const ResetPassword = ({ email, newPassword }) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div>
        <p
          onClick={() => setOpened(true)}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textAlign:"right",
            marginRight:40
          }}
        >
          هل نسيت كلمة المرور؟
        </p>
        <div>
          <Modal
            dir="rtl"
            opened={opened}
            onClose={() => setOpened(false)}
            title="إعادة تعيين كلمة المرور"
          >
            <Paper radius="md" p="xl" withBorder>
              <form>
                <TextInput
                  dir="rtl"
                  label="البريد الإلكتروني"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={email}
                  required
                  mb="md"
                />
                <PasswordInput
                  label="كلمة المرور الجديدة"
                  placeholder="أدخل كلمة المرور الجديدة"
                  value={newPassword}
                  required
                  mb="md"
                />
                <PasswordInput
                  label="تأكيد كلمة المرور الجديدة"
                  placeholder="أدخل تأكيد كلمة المرور"
                  required
                  mb="md"
                />
                <Button type="submit" fullWidth mt="xl" color="red">
                  إعادة تعيين كلمة المرور
                </Button>
              </form>
            </Paper>
          </Modal>
        </div>
      </div>
    </>
  );
};
