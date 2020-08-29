import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const FollowerList = ({ header, data }) => {
  return (
    <>
      <List
        style={{ marginBottom: "10px" }}
        header={<div>{header}</div>}
        grid={{
          gutter: 4,
          xs: 2,
          md: 3,
        }}
        loadMore={
            <div style={{ textAlign: "center", margin: "10px 0" }}>
            <Button>더 보기</Button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item.nickname} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

FollowerList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowerList;
