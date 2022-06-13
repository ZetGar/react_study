// import { Tabs, Tab, Sonnet, CloseButton } from "react-bootstrap";
import { useState } from "react";

const Hook = () => {
  let [close, setClose] = useState(true);

  return (
    <>
      <section>
        <h4>Notice _ popup</h4>
        <div className="notice_popup">
          <div className="popup">
            {close == true ? (
              <div>
                <div className="notice">
                  <h3>Notice</h3>
                  <p>
                    texttexttexttexttexttext
                    <br />
                    texttexttexttexttexttexttexttexttext
                    <br />
                    texttexttexttexttexttexttexttext
                    <br />
                    texttexttexttexttext
                    <br />
                    texttexttexttexttexttext
                    <br />
                    texttexttexttexttexttexttexttexttext
                    <br />
                    texttexttexttexttexttexttexttext
                    <br />
                    texttexttexttexttext
                    <br />
                    texttexttexttexttexttext
                    <br />
                    texttexttexttexttexttexttexttexttext
                    <br />
                    texttexttexttexttexttexttexttext
                    <br />
                  </p>
                </div>
                <div
                  className="close"
                  onClick={() => {
                    setClose(false);

                    // 서버로 데이터 전송하는 post요청
                    axios.post("/serverurl", { name: "kim" });

                    // 동시에 ajax요청 여러개하려면
                    Promise.all([axios.get("url1"), axios.get("/url2")])
                      // 2개가 실행된 후 ~~ 실행해주세요
                      .then(() => {});
                  }}
                >
                  닫기
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="modal" title="modal"></Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs> */}
    </>
  );
};
export default Hook;
