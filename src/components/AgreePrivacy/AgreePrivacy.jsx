import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const AgreePrivacy = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
    
      >
        <div dir="rtl">
          <p>شروط الاستخدام</p>
          <p>
            1. الموافقة على الشروط عند استخدامك لهذا الموقع/التطبيق، فإنك توافق
            على الالتزام بشروط الاستخدام هذه. إذا لم توافق على أي من الشروط،
            يرجى التوقف عن استخدام الموقع/التطبيق فورًا.
          </p>
          <p>
            2. التعديلات على الشروط نحتفظ بالحق في تعديل شروط الاستخدام في أي
            وقت. سيتم إخطارك بأي تغييرات من خلال نشر النسخة الجديدة على هذه
            الصفحة. استمرارك في استخدام الموقع بعد نشر التعديلات يعتبر موافقة
            منك على الشروط المعدلة.
          </p>
          <p>
            3. استخدام الموقع يجب استخدام هذا الموقع لأغراض قانونية فقط. يمنع أي
            استخدام غير قانوني أو غير مصرح به، بما في ذلك التلاعب أو محاولة
            التلاعب بالخدمات المقدمة.
          </p>
          <p>
            4. الملكية الفكرية جميع المحتويات الموجودة على هذا الموقع، بما في
            ذلك النصوص والصور والشعارات، محمية بموجب حقوق الملكية الفكرية. لا
            يجوز لك نسخ أو تعديل أو إعادة نشر أي جزء من المحتوى دون إذن صريح من
            المالك.
          </p>
        </div>
      </Modal>
      <div className="agree d-flex flex-row  ">
        <p style={{ marginRight: "8px", fontSize: "12px" }}>الموافقة على</p>
        <p
          onClick={open}
          style={{
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "pointer",
            marginRight: "8px",
          }}
        >
            سياسة الخصوصية وشروط الخدمة. 
        </p>
      </div>
    </div>
  );
};

export default AgreePrivacy;
