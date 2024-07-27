import React, {
  forwardRef,
  useMemo,
} from "react";
import ReactQuill from "react-quill";
import QuillModule from "./QuillModule";
import { QuillToolBar } from "./QuillEditor.style";

const QuillEditor = forwardRef(
  ({ image, content, onChange }, ref) => {
    const modules = useMemo(
      () => ({
        toolbar: {
          container: "#toolBar",
        },
      }),
      []
    );
    const formats = [
      "font",
      "size",
      "header",
      "color",
      "background",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ];
    return (
      <>
        <QuillToolBar id="toolBar">
          <QuillModule
            image={image}
            style={{
              width: "38rem",
            }}
          />
        </QuillToolBar>
        <div>
          <ReactQuill
            modules={modules}
            formats={formats}
            style={{
              height: "25rem",
              width: "38rem",
            }}
            value={content}
            onChange={onChange}
            ref={ref}
            placeholder="내용을 입력해주세요."
          />
        </div>
      </>
    );
  }
);
export default QuillEditor;
