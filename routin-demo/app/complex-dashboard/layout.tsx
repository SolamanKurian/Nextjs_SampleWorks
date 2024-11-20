
export default function RootLayout({
  children,
  users,
  revenue,
  notifications,
  login,
  chakka
}: {
  children: React.ReactNode;
  users:React.ReactNode;
  revenue:React.ReactNode;
  notifications:React.ReactNode;
  login:React.ReactNode;
  chakka:React.ReactNode;
}) {
  const isLoggedIn=true;
  return isLoggedIn?(
   <div>

      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div> 
      <div>{notifications}</div>
      <div>{chakka}</div>    

    
      </div>
  ):(
    <div>{login}</div>
   
  );
}
