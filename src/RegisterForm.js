import {useState, useEffect}  from 'react';
import { getDatabase, ref, set, push, onValue} from "firebase/database";
import {Button, Form, Table} from 'react-bootstrap';

function RegisterForm() {
    const db = getDatabase();
    let [batchNo, setBatchNo] = useState("");
    let [classNo, setClassNo] = useState("");
    let [batchName, setClassTopic] = useState("");
    let [details, setDetails] = useState([]);
   

    let handleBatchNo = (e) => {
        setBatchNo(e.target.value);
    };
    
    let handleClassNo = (e) => {
        setClassNo(e.target.value);
    };

    let handleClassTopic = (e) => {
        setClassTopic(e.target.value);
    };

    let arr = [];
    let handleAttendance = (name) => {
        if(arr.indexOf(name) === -1){
            arr.push(name);
        }  else {
            arr.splice(arr.indexOf(name), 1);   
        }
    };
    
    let handleSubmit = (e) => { 
        e.preventDefault();
        let info = {
            batchno: batchNo,
            classno: classNo,
            batchname: batchName,
            present: arr,
        };
        set( push(ref(db, 'attendance' )), info);
        
    };
    
    useEffect(() => {
        onValue(ref(db, 'attendance' ), (snapshot) => {
            const data = snapshot.val();
            setDetails(data);
          });
     }, []); 

  return (
      <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Batch Number</Form.Label>
                <Form.Control type="text" onChange={handleBatchNo}  placeholder="Enter Batch Number" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Class Number</Form.Label>
                <Form.Control type="text" onChange={handleClassNo} placeholder="Class Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Class Topic</Form.Label>
                <Form.Control type="text" onChange={handleClassTopic} placeholder="Class Topic" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                <Form.Check type="checkbox" onChange={() => handleAttendance("Kawsik")} label="Kawsik"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                <Form.Check type="checkbox" onChange={() => handleAttendance("Remon")} label="Remon"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                <Form.Check type="checkbox" onChange={() => handleAttendance("Aneek")} label="Aneek"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                <Form.Check type="checkbox" onChange={() => handleAttendance("Polash")} label="Polash"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                <Form.Check type="checkbox" onChange={() => handleAttendance("Sifat")} label="Sifat" />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} type="submit">
                Submit
            </Button>
        </Form>

        
        <Table striped bordered hover className="mt-5">
            <thead>
                <tr>
                <th>#</th>
                <th>Batch No</th>
                <th>Class Number</th>
                <th>Class Topic</th>
                <th>Students</th>
                </tr>
            </thead>
            <tbody>
                {details.map((item) => (
                <tr>
                    <td>1</td>
                    <td>Test</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                ))}
                
            </tbody>
        </Table>
        </>
  )
}

export default RegisterForm
