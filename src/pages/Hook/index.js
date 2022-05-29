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
