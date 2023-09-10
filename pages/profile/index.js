import AuthLayout from '../../components/Layout/Authenticated'
import withProtected from "../../hoc/withProtected";
const Profile = () => {
  return (
    <AuthLayout title="Profile">
      Profile
    </AuthLayout>
  )
}

export default withProtected(Profile)
