import React from "react";
import Layout from "../components/Layout";
import LogForm from "../components/LogForm";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout>
      <LogForm />
    </Layout>
  );
};

export default Dashboard;
