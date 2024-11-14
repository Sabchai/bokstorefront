
import React from 'react'
import './admin.css'
const Admin = ({userAcount,logout}) => {
  return (
    <div><>
    <div id="notificationContainer" />
    <div className="dashboard">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
          <h2>{userAcount.role}</h2>
        </div>
        <ul className="nav-links">
          <li className="active" data-page="dashboard">
            <a href="#dashboard">
              <i className="fas fa-home" />
            {userAcount.name}
            </a>
          </li>
          <li data-page="analytics">
            <a href="#analytics">
              <i className="fas fa-chart-line" />
             {userAcount.email}
            </a>
          </li>
          <li data-page="sales">
            <a href="#sales">
              <i className="fas fa-shopping-cart" />
              Sales
            </a>
          </li>
          <li data-page="customers">
            <a href="#customers">
              <i className="fas fa-users" />
              Customers
            </a>
          </li>
          <li data-page="inventory">
            <a href="#inventory">
              <i className="fas fa-box" />
              Inventory
            </a>
          </li>
          <li data-page="settings">
            <a href="#settings">
              <i className="fas fa-cog" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <header>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search" />
          </div>
          <div className="user-info" id="userInfoDropdown">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="avatar"
            />
            <span>{userAcount.name}</span>
            <button onClick={()=>logout()}   >Logout</button>
            <i className="fas fa-chevron-down" />
            <div className="dropdown-menu" id="profileDropdown">
              <a href="#profile">
                <i className="fas fa-user" /> Profile
              </a>
              <a href="#settings">
                <i className="fas fa-cog" /> Settings
              </a>
              <a href="#logout">
                <i className="fas fa-sign-out-alt" /> Logout
              </a>
            </div>
          </div>
        </header>
        <div id="dashboard" className="page-content active">
          <h1>Dashboard Overview</h1>
          <div className="stats-grid">
            <div className="stat-card glow">
              <i className="fas fa-users" />
              <div className="stat-info">
                <h3>Total Users</h3>
                <p>15,687</p>
              </div>
            </div>
            <div className="stat-card glow">
              <i className="fas fa-shopping-bag" />
              <div className="stat-info">
                <h3>Total Sales</h3>
                <p>$124,563</p>
              </div>
            </div>
            <div className="stat-card glow">
              <i className="fas fa-chart-line" />
              <div className="stat-info">
                <h3>Revenue</h3>
                <p>$67,895</p>
              </div>
            </div>
            <div className="stat-card glow">
              <i className="fas fa-percent" />
              <div className="stat-info">
                <h3>Growth</h3>
                <p>+24.5%</p>
              </div>
            </div>
          </div>
          <div className="charts-container">
            <div className="chart-card glow">
              <h3>Sales Analytics</h3>
              <div id="salesChart" />
            </div>
            <div className="chart-card glow">
              <h3>User Growth</h3>
              <div id="userGrowthChart" />
            </div>
          </div>
          <div className="data-tables">
            <div className="table-card glow">
              <h3>Recent Orders</h3>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody id="recentOrdersBody" />
              </table>
            </div>
            <div className="table-card glow">
              <h3>Top Selling Products</h3>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Sold</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody id="topProductsBody" />
              </table>
            </div>
          </div>
        </div>
        <div id="analytics" className="page-content">
          <h1>Analytics</h1>
          <div className="charts-container">
            <div className="chart-card glow">
              <h3>Traffic Sources</h3>
              <div id="trafficSourcesChart" />
            </div>
            <div className="chart-card glow">
              <h3>Conversion Rates</h3>
              <div id="conversionRatesChart" />
            </div>
          </div>
          <div className="data-tables">
            <div className="table-card glow">
              <h3>Top Performing Pages</h3>
              <table>
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Views</th>
                    <th>Unique Visitors</th>
                    <th>Avg. Time on Page</th>
                  </tr>
                </thead>
                <tbody id="topPagesBody" />
              </table>
            </div>
          </div>
        </div>
        <div id="sales" className="page-content">
          <h1>Sales Management</h1>
          <div className="charts-container">
            <div className="chart-card glow">
              <h3>Monthly Sales</h3>
              <div id="monthlySalesChart" />
            </div>
            <div className="chart-card glow">
              <h3>Sales by Category</h3>
              <div id="salesByCategoryChart" />
            </div>
          </div>
          <div className="data-tables">
            <div className="table-card glow">
              <h3>Sales Representatives Performance</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Total Sales</th>
                    <th>Deals Closed</th>
                    <th>Performance Score</th>
                  </tr>
                </thead>
                <tbody id="salesRepBody" />
              </table>
            </div>
          </div>
        </div>
        <div id="customers" className="page-content">
          <h1>Customer Management</h1>
          <div className="charts-container">
            <div className="chart-card glow">
              <h3>Customer Acquisition</h3>
              <div id="customerAcquisitionChart" />
            </div>
            <div className="chart-card glow">
              <h3>Customer Satisfaction</h3>
              <div id="customerSatisfactionChart" />
            </div>
          </div>
          <div className="data-tables">
            <div className="table-card glow">
              <h3>Top Customers</h3>
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Total Spent</th>
                    <th>Orders</th>
                    <th>Last Order Date</th>
                  </tr>
                </thead>
                <tbody id="topCustomersBody" />
              </table>
            </div>
          </div>
        </div>
        <div id="inventory" className="page-content">
          <h1>Inventory Management</h1>
          <div className="charts-container">
            <div className="chart-card glow">
              <h3>Stock Levels</h3>
              <div id="stockLevelsChart" />
            </div>
            <div className="chart-card glow">
              <h3>Product Turnover</h3>
              <div id="productTurnoverChart" />
            </div>
          </div>
          <div className="data-tables">
            <div className="table-card glow">
              <h3>Low Stock Alert</h3>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Current Stock</th>
                    <th>Reorder Level</th>
                    <th>Supplier</th>
                  </tr>
                </thead>
                <tbody id="lowStockBody" />
              </table>
            </div>
          </div>
        </div>
        <div id="settings" className="page-content">
          <h1>Settings</h1>
          <div className="settings-container">
            <div className="settings-card glow">
              <h3>Account Settings</h3>
              <form id="accountSettingsForm">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue="johndoe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">New Password</label>
                  <input type="password" id="password" name="password" />
                </div>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
            <div className="settings-card glow">
              <h3>Notification Preferences</h3>
              <form id="notificationSettingsForm">
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      defaultChecked=""
                    />
                    Email Notifications
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" name="smsNotifications" />
                    SMS Notifications
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="pushNotifications"
                      defaultChecked=""
                    />
                    Push Notifications
                  </label>
                </div>
                <button type="submit" className="btn-primary">
                  Save Preferences
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
  </div>
  )
}

export default Admin