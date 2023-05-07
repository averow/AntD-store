import { Badge, Menu } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Typography from "antd/es/typography/Typography";

function AppHeader() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div className="appHeader">
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeOutlined />,
            key: ""
          },
          {
            label: "Men",
            key: "men",
            children: [
              {
                label: "Men's Shirts",
                key: "mens-shirts"
              },
              {
                label: "Men's Shoes",
                key: "mens-shoes"
              },
              {
                label: "Men's Watches",
                key: "mens-watches"
              }
            ]
          },
          {
            label: "Women",
            key: "women",
            children: [
              {
                label: "Women's Dresses",
                key: "womens-dresses"
              },
              {
                label: "Women's Shoes",
                key: "womens-shoes"
              },
              {
                label: "Women's Watches",
                key: "womens-watches"
              },
              {
                label: "Women's Bags",
                key: "womens-bags"
              },
              {
                label: "Women's Jewellery",
                key: "womens-jewellery"
              }
            ]
          },
          {
            label: "Fragrances",
            key: "fragrances"
          }
        ]}
      />
      <Typography.Title> Store </Typography.Title>
      <AppCart />
    </div>
  );
}
function AppCart() {
  return (
    <div>
      {" "}
      <Badge count={7} className="shoppingCart">
        <ShoppingCartOutlined />
      </Badge>
    </div>
  );
}

export default AppHeader;
