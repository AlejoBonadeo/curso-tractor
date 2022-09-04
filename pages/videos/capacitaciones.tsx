import { Layout } from "../../components";
import { Typography } from "@mui/material";

const Videos = () => {
  return (
    <Layout title="Curso Tractor - Videos" description="TODO">
      <div style={{ backgroundColor: "#C5E5F5" }}>
        <Typography
          variant="h3"
          component="h1"
          style={{
            width: "100%",
          }}
        >
          Videos
        </Typography>
        <div
          style={{
            width: "100%",
            height: "100vh",
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 4fr)",
            gridTemplateRows: "repeat(5, 3fr)",
            gap: "3fr",
            columnGap: "3rem",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              gridArea: "1 / 1 / 2 / 2",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              gridArea: "1 / 2 / 2 / 3",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              gridArea: "1 / 3 / 2 / 4",
            }}
          ></div>

          <Typography
            variant="h3"
            component="h2"
            style={{
              width: "100%",
              gridArea: "2 / 1 / 3 / 4",
              textAlign: "right",
              marginTop: "40px",
            }}
          >
            Videos
          </Typography>

          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              gridArea: "3 / 1 / 4 / 2",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              gridArea: "3 / 2 / 4 / 3",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              gridArea: "3 / 3 / 4 / 4",
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
