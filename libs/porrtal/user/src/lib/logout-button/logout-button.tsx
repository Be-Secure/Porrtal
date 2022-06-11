import useAuth from "../use-auth/use-auth";

/* eslint-disable-next-line */
export interface LogoutButtonProps {}

export function LogoutButton(props: LogoutButtonProps) {
  const auth = useAuth();

  return (
    <button onClick={() => auth?.logout()}>
      Log Out
    </button>
  );
}

export default LogoutButton;
