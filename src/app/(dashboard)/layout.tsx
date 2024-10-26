import Appsidebar from "@/components/shared/sidebar/appsidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DsahboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <Appsidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
};

export default DsahboardLayout;
