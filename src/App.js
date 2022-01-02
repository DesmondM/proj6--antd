import './App.css';
import {Layout, Button, Table, Card, Col, Row, Carousel} from 'antd';


const {Header} = Layout;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];



function App() {
  
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
   

  return (
    <div className="App">
      <Layout>
        <Header className='header'>
          <h1 className='title'>Ant Design Rocks!</h1>
        </Header>
      </Layout>
      <Button type="primary">Button </Button>
      <Table dataSource={dataSource} columns={columns} />;
    


   
    
    
    <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>This is the best part about ant</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Things work just like that</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Keep clicking to see more goodies</h3>
    </div>
    <div>
      <h3 style={contentStyle}>...and this is the last one</h3>
    </div>
  </Carousel>




      <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>,

    </div>
  );
}

export default App;
