import Layout from "../../../components/admin/layout";
import db from "../../../utils/db";
import User from "../../../models/User";
import EnhancedTable from "../../../components/admin/users/table";
import dbConnect from "../../../utils/db";
export default function users({ users }) {
  console.log(users);
  return (
    <Layout>
      <EnhancedTable rows={users} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  await dbConnect();
  const users = await User.find({}).sort({ createdAt: -1 }).lean();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
