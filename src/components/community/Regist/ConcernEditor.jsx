import QuillEditor from "@components/common/editor/QuillEditor";
import { forwardRef } from "react";
import ReactQuill from "react-quill";

const ConcernEditor = forwardRef(
  ({ content, onChange }, ref) => {
    return (
      <div style={{ width: "38rem" }}>
        <QuillEditor
          image={false}
          content={content}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default ConcernEditor;
