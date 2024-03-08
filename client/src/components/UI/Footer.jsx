// import { CDBFooter } from 'cdbreact'; //?? May use this lib to use their Footer Com
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div style={{ display: 'block', margin: 40 }}>
      <MDBFooter
        className="text-center d-flex"
        style={{ height: '10vh', margin: '10px' }}
        tag="footer"
      >
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: '' }} //?? Consider changing bkground color
              href="https://stackoverflow.com/users/23294481/seeyouthursday"
              role="button"
            >
              <MDBIcon fab icon="stack-overflow" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: '#0082ca' }}
              href="https://www.linkedin.com/in/brian-galyen-85aa06aa/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: '#333333' }}
              href="https://github.com/SeeYouThursday"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}
