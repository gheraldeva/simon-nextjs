import WhiteTemplate from "@/components/WhiteTemplate";

const AdminHome = () => {
    return (
      <div className="flex">
        {/* Main Content */}
        <WhiteTemplate>
          <div className="flex-1 flex flex-col">
            {/* Content */}
            <main className="flex-1 p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg">Users</h3>
                  <p className="text-gray-600">Manage all registered users here.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg">Reports</h3>
                  <p className="text-gray-600">View all system reports here.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg">Settings</h3>
                  <p className="text-gray-600">Adjust system settings here.</p>
                </div>
              </div>
            </main>
          </div>
        </WhiteTemplate>
      </div>
    );
  };
  
  export default AdminHome;
  