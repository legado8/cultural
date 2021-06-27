import React from "react";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
        <div style={{ marginTop: "100px" }}>
          <h1>404: Page Not Found</h1>
        </div>
    </Layout>
  );
}

export default NotFoundPage;
