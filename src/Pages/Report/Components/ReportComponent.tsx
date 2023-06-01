import React, { useState, ChangeEvent, useEffect } from "react";
import "./Report.css";
import { useLocation, useNavigate } from "react-router-dom";
import { formatNumber, formattedCurrency } from "../../../Middleware";
import ProfileIcon from "../../../icon/ProfileIcon";
import DormantIcon from "../../../icon/DormantIcon";
import ActiveIcon from "../../../icon/ActiveIcon";
import DoubleLeftArrowPaginationIcon from "../../../icon/DoubleLeftArrowPaginationIcon";
import SingleLeftArrowPaginationIcon from "../../../icon/SingleLeftArrowPaginationIcon";
import SingleRightArrowPaginationIcon from "../../../icon/SingleRightArrowPaginationIcon";
import DoubleRightArrowPaginationIcon from "../../../icon/DoubleRightArrowPaginationIcon";
import RadioActiveIcon from "../../../icon/RadioActiveIcon";
import RadioInactiveIcon from "../../../icon/RadioInactiveIcon";
import CancelIcon from "../../../icon/CancelIcon";
import PaymentCardIcon from "../../../icon/PaymentCardIcon";
import SuccessfulIcon from "../../../icon/SuccessfulIcon";
import FIlterIcon from "../../../icon/FIlterIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import UnCheckedCheckbox from "../../../icon/UnCheckedCheckbox";
import CheckboxIcon from "../../../icon/CheckboxIcon";

interface Customer {
     name: string;
     id: string;
     category: string;
     loanPeriod: string;
     status: string;
}

type CategoryColors = {
     [key: string]: {
          backgroundColor: string;
          textColor: string;
     };
};

interface ReportProps {
     header: string;
     bankProfileHeaderClassName: string;
     bankDataContainer: string;
}

interface BankProfileProps {
     customers: string;
     totalNumber: number;
     transactionValue: string;
     loansTaken: number;
     loansPerformance: {
          normal: number;
          watch: number;
          NPL: number;
     }[];
}

interface CustomerDataProps {
     data?: Customer;
}

interface Toggle {
     [key: string]: boolean;
}

const ReportComponent: React.FC<ReportProps> = ({
     header,
     bankProfileHeaderClassName,
     bankDataContainer,
}: ReportProps) => {
     const customerData = useSelector(
          (state: RootState) => state.reportData.customerData
     );
     const bankProfile = useSelector(
          (state: RootState) => state.reportData.bankProfile
     );

     const [segmentInput, setSegmentInput] = useState("");
     const [customerDataArray, setCustomerDataArray] = useState<Customer[]>([]);
     const [bankProfileArray, setBankProfileArray] = useState<
          BankProfileProps[]
     >([]);
     const [showSearchCustomer, setShowSearchCustomer] = useState(false);

     const [currentCustomerPage, setCurrentCustomerPage] = useState(1);
     const customersPerPage = 9;

     const [toggleSelect, setToggleSelect] = useState<Toggle>({
          "1": true,
     });
     const [toggleFilter, setToggleFilter] = useState<Toggle>({});
     const [isSearch, setIsSearch] = useState(false);
     const [showSort, setShowSort] = useState(false);
     const [showNewCustomerOverlay, setShowNewCustomerOverlay] =
          useState(false);
     const [isPaymentPage, setIsPaymentPage] = useState(false);
     const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
     const [activeTab, setActiveTab] = useState<string>("Active");

     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
          setSegmentInput(e.target.value);
     };

     const [sortStartDate, setSortStartDate] = useState("");
     const [sortEndDate, setSortEndDate] = useState("");

     function toggleSelectInput(identifier: string): void {
          setToggleSelect((prevToogle) => ({
               [identifier]: !prevToogle[identifier],
          }));
     }

     function toggleFilterInput(identifier: string): void {
          setToggleFilter((prevToogle) => ({
               [identifier]: !prevToogle[identifier],
          }));
     }

     const locate = useLocation();
     console.log(locate);

     const categoryColorMap: CategoryColors = {
          agric: {
               backgroundColor: "rgba(201, 236, 226, 1)",
               textColor: "rgba(4, 103, 75, 1)",
          },
          corporates: {
               backgroundColor: "rgba(155, 186, 255, 1)",
               textColor: "rgba(155, 186, 255, 1)",
          },
          loyalists: {
               backgroundColor: "rgba(255, 225, 192, 1)",
               textColor: "rgba(190, 100, 2, 1)",
          },
          retail: {
               backgroundColor: "rgba(196, 162, 252, 1)",
               textColor: "rgba(45, 0, 118, 1)",
          },
          micro: {
               backgroundColor: "rgba(212, 217, 255, 1)",
               textColor: "rgba(42, 56, 164, 1)",
          },
     };

     function getCategoryColors(category: string | undefined): {
          backgroundColor: string;
          textColor: string;
     } {
          const lowercaseCategory = category?.toLowerCase();

          for (const key in categoryColorMap) {
               if (lowercaseCategory?.includes(key)) {
                    return categoryColorMap[key];
               }
          }

          return { backgroundColor: "", textColor: "" };
     }

     const pageNumbers: number[] = [];
     const totalCustomerPages = Math.ceil(
          customerDataArray.length / customersPerPage
     );
     for (let i = 1; i <= totalCustomerPages; i++) {
          pageNumbers.push(i);
     }

     useEffect(() => {
          setBankProfileArray(bankProfile);
          setCustomerDataArray(customerData);
     }, []);

     const indexOfLastCustomer = currentCustomerPage * customersPerPage;
     const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
     const currentCustomerPageArray = customerDataArray.slice(
          indexOfFirstCustomer,
          indexOfLastCustomer
     );

     function customerSearchData(id: string): Customer | undefined {
          return customerDataArray.find((customer) => customer.id === id);
     }

     const foundCustomer = customerSearchData(segmentInput);

     const paginate = (pageNumber: number) =>
          setCurrentCustomerPage(pageNumber);

     const renderPageNumbers = () => {
          if (pageNumbers.length <= 5) {
               return pageNumbers.map((number) => (
                    <p
                         className={
                              number === currentCustomerPage
                                   ? "current-active"
                                   : ""
                         }
                         onClick={() => paginate(number)}
                         key={number}
                    >
                         {number}
                    </p>
               ));
          } else {
               const visiblePages = calculateVisiblePages();
               const firstPage = visiblePages[0];
               const lastPage = visiblePages[visiblePages.length - 1];

               const renderFirstEllipsis = () => {
                    if (firstPage > 1) {
                         return (
                              <p className="ellipsis" key="first-ellipsis">
                                   ...
                              </p>
                         );
                    }
               };

               const renderLastEllipsis = () => {
                    if (lastPage < totalCustomerPages) {
                         return (
                              <p className="ellipsis" key="last-ellipsis">
                                   ...
                              </p>
                         );
                    }
               };

               return [
                    renderFirstEllipsis(),
                    visiblePages.map((number) => (
                         <p
                              className={
                                   number === currentCustomerPage
                                        ? "current-active"
                                        : ""
                              }
                              onClick={() => paginate(number)}
                              key={number}
                         >
                              {number}
                         </p>
                    )),
                    renderLastEllipsis(),
               ];
          }
     };

     const calculateVisiblePages = () => {
          let visiblePages: number[] = [];
          let startPage: number;
          let endPage: number;

          if (totalCustomerPages <= 5) {
               visiblePages = pageNumbers;
          } else {
               if (currentCustomerPage <= 3) {
                    startPage = 1;
                    endPage = 5;
               } else if (currentCustomerPage + 1 >= totalCustomerPages) {
                    startPage = totalCustomerPages - 4;
                    endPage = totalCustomerPages;
               } else {
                    startPage = currentCustomerPage - 2;
                    endPage = currentCustomerPage + 2;
               }

               visiblePages = pageNumbers.slice(startPage - 1, endPage);
          }

          return visiblePages;
     };

     const navigate = useNavigate();

     const handleNavigation = () => {
          if (locate.pathname === "/all-customers") {
               navigate("/customers-report");
          } else if (locate.pathname === "/customers-report") {
               navigate("/all-customers");
          }
     };
     const handleProceedClick = () => {
          setShowNewCustomerOverlay(false);
          setIsPaymentPage(true);

          setTimeout(() => {
               setIsPaymentPage(false);
               setIsPaymentSuccess(true);
          }, 1000);

          setTimeout(() => {
               setIsPaymentSuccess(false);
          }, 2000);
     };

     const findAccountStatus = (tab: string, status: string) => {
          let filteredAccounts: Customer[];
          if (status === "All") {
               setCustomerDataArray(customerData);
          } else {
               filteredAccounts = customerData.filter(
                    (customer) =>
                         customer.status.toLowerCase() === status.toLowerCase()
               );
               setCustomerDataArray(filteredAccounts);
          }
          setActiveTab(tab);
     };

     function SortOverlay() {
          return (
               <>
                    <div className="new-customer-container"></div>

                    <div className="new-customer-content">
                         <div>
                              <div className="sort-container">
                                   <article>
                                        <p>Category</p>
                                        <section
                                             onClick={() => {
                                                  setShowSort(false);
                                             }}
                                        >
                                             <CancelIcon />
                                        </section>
                                        <div>
                                             <p>
                                                  {toggleFilter["1"] ? (
                                                       <CheckboxIcon
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="1"
                                                       />
                                                  ) : (
                                                       <UnCheckedCheckbox
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="1"
                                                       />
                                                  )}
                                                  The Agric Client
                                             </p>
                                             <p>
                                                  {toggleFilter["2"] ? (
                                                       <CheckboxIcon
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="2"
                                                       />
                                                  ) : (
                                                       <UnCheckedCheckbox
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="2"
                                                       />
                                                  )}
                                                  The Micro Techs
                                             </p>
                                             <p>
                                                  {toggleFilter["3"] ? (
                                                       <CheckboxIcon
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="3"
                                                       />
                                                  ) : (
                                                       <UnCheckedCheckbox
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="3"
                                                       />
                                                  )}
                                                  The Retail Techs
                                             </p>
                                             <p>
                                                  {toggleFilter["4"] ? (
                                                       <CheckboxIcon
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="4"
                                                       />
                                                  ) : (
                                                       <UnCheckedCheckbox
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="4"
                                                       />
                                                  )}
                                                  The Loyalists
                                             </p>
                                             <p>
                                                  {toggleFilter["5"] ? (
                                                       <CheckboxIcon
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="5"
                                                       />
                                                  ) : (
                                                       <UnCheckedCheckbox
                                                            handleClick={
                                                                 toggleFilterInput
                                                            }
                                                            identifier="5"
                                                       />
                                                  )}
                                                  The Corporates
                                             </p>
                                        </div>
                                   </article>
                                   <p
                                        style={{
                                             color: "#000",
                                             fontSize: "15px",
                                             textAlign: "start",
                                        }}
                                   >
                                        Select loan period
                                   </p>
                                   <div>
                                        <div className="sort-input-container">
                                             <input
                                                  type="date"
                                                  name=""
                                                  id=""
                                                  placeholder="mm-yy"
                                                  onChange={(e) =>
                                                       setSortStartDate(
                                                            e.target.value
                                                       )
                                                  }
                                                  value={sortStartDate}
                                             />
                                             <span>-</span>
                                             <input
                                                  type="date"
                                                  name=""
                                                  id=""
                                                  onChange={(e) =>
                                                       setSortEndDate(
                                                            e.target.value
                                                       )
                                                  }
                                                  value={sortEndDate}
                                             />
                                        </div>
                                   </div>
                                   <div
                                        style={{
                                             display: "flex",
                                             justifyContent: "start",
                                             marginTop: "30px",
                                        }}
                                   >
                                        <p
                                             style={{
                                                  textAlign: "start",
                                                  padding: "10 30px",
                                                  backgroundColor:
                                                       "rgba(64, 123, 255, 1)",
                                                  color: "#fff",
                                             }}
                                             onClick={() => {
                                                  if (
                                                       sortStartDate &&
                                                       sortEndDate
                                                  ) {
                                                       navigate("/client");
                                                  } else
                                                       alert(
                                                            "Input a date to filter"
                                                       );
                                             }}
                                        >
                                             Apply Filter
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          );
     }

     function NewCustomerOverlay() {
          return (
               <>
                    <div className="new-customer-container"></div>
                    <div className="new-customer-content">
                         <div onClick={() => setShowNewCustomerOverlay(false)}>
                              <div
                                   style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "30%",
                                        height: "30%",
                                   }}
                              >
                                   <section
                                        onClick={() =>
                                             setShowNewCustomerOverlay(false)
                                        }
                                   >
                                        <CancelIcon />
                                   </section>

                                   <p>Payment required...</p>
                                   <div>
                                        <p>This ID belongs to a new customer</p>
                                        <p>
                                             You are required to pay{" "}
                                             <span>
                                                  {formattedCurrency.format(
                                                       350
                                                  )}{" "}
                                             </span>{" "}
                                             to segment customer
                                        </p>
                                   </div>
                                   <div>
                                        <p
                                             onClick={() =>
                                                  setShowNewCustomerOverlay(
                                                       false
                                                  )
                                             }
                                        >
                                             Cancel
                                        </p>
                                        <p onClick={handleProceedClick}>
                                             Proceed
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          );
     }

     function PaymentPagerOverlay() {
          return (
               <>
                    <div className="new-customer-container"></div>
                    <div className="new-customer-content">
                         <div onClick={() => setIsPaymentPage(false)}>
                              <div
                                   style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "30%",
                                        height: "30%",
                                   }}
                              >
                                   <PaymentCardIcon /> <p>Payment Page</p>
                              </div>
                         </div>
                    </div>
               </>
          );
     }
     function PaymentSuccessOverlay() {
          return (
               <>
                    <div className="new-customer-container"></div>
                    <div className="new-customer-content">
                         <div onClick={() => setIsPaymentSuccess(false)}>
                              <div
                                   style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "30%",
                                        height: "30%",
                                   }}
                              >
                                   <SuccessfulIcon />

                                   <p>Payment Succesful</p>
                                   <p
                                        style={{
                                             color: "#000",
                                        }}
                                   >
                                        Redirecting..
                                   </p>
                              </div>
                         </div>
                    </div>
               </>
          );
     }

     function searchCustomer() {
          function handleSearchRequest() {
               setShowSearchCustomer(false);
               setIsSearch(true);
               setShowSort(false);
          }

          return (
               <>
                    <div className="search-customer-container">
                         <div>
                              <div>
                                   <label htmlFor="">Customer ID</label>
                                   <input
                                        type="text"
                                        onChange={handleInputChange}
                                        value={segmentInput}
                                   />
                              </div>
                              <div>
                                   <p>Select</p>
                                   <div>
                                        {toggleSelect["1"] ? (
                                             <RadioActiveIcon
                                                  handleClick={
                                                       toggleSelectInput
                                                  }
                                                  identifier="1"
                                             />
                                        ) : (
                                             <RadioInactiveIcon
                                                  handleClick={
                                                       toggleSelectInput
                                                  }
                                                  identifier="1"
                                             />
                                        )}
                                        <label>Existing</label>
                                        {toggleSelect["2"] ? (
                                             <RadioActiveIcon
                                                  handleClick={
                                                       toggleSelectInput
                                                  }
                                                  identifier="2"
                                             />
                                        ) : (
                                             <RadioInactiveIcon
                                                  handleClick={
                                                       toggleSelectInput
                                                  }
                                                  identifier="2"
                                             />
                                        )}
                                        <label>New</label>
                                   </div>
                              </div>

                              <div>
                                   {toggleSelect["1"] ? (
                                        <button onClick={handleSearchRequest}>
                                             SEARCH
                                        </button>
                                   ) : (
                                        <button
                                             onClick={() =>
                                                  !segmentInput
                                                       ? alert(
                                                              "Customer ID required"
                                                         )
                                                       : setShowNewCustomerOverlay(
                                                              true
                                                         )
                                             }
                                        >
                                             Add new customer
                                        </button>
                                   )}
                              </div>
                         </div>
                    </div>
               </>
          );
     }

     function CustomerData({ data }: CustomerDataProps) {
          return (
               <div key={data?.id}>
                    <div>
                         <p>{data?.name}</p>
                    </div>
                    <div>
                         <p>{data?.id}</p>
                    </div>
                    <div>
                         <p
                              className="category"
                              style={getCategoryColors(data?.category)}
                              onClick={() => navigate("/client")}
                         >
                              {data?.category}
                         </p>
                    </div>
                    <div>
                         <p>{data?.loanPeriod}</p>
                    </div>
                    <div>
                         <p className="status">
                              {data?.status === "DORMANT" ? (
                                   <DormantIcon />
                              ) : (
                                   <ActiveIcon />
                              )}
                              <span>{data?.status}</span>
                         </p>
                    </div>
               </div>
          );
     }

     return (
          <>
               {showNewCustomerOverlay && <NewCustomerOverlay />}
               {isPaymentPage && <PaymentPagerOverlay />}
               {isPaymentSuccess && <PaymentSuccessOverlay />}
               {showSort && <SortOverlay />}
               <div className={`report-container`}>
                    <div className="prop-div"></div>
                    <div>
                         <div>
                              <h1 onClick={handleNavigation}>{header}</h1>
                         </div>
                         <div className="input-sort-container">
                              <div>
                                   <div className="input-with-icon-container">
                                        <input
                                             type="text"
                                             value={
                                                  !showSearchCustomer
                                                       ? segmentInput
                                                       : ""
                                             }
                                             placeholder="Segment Customer"
                                             readOnly
                                             onClick={() => {
                                                  setShowSearchCustomer(
                                                       (prevShow) => !prevShow
                                                  );
                                                  setShowSort(false);
                                             }}
                                        />
                                        <div className="icon-container">
                                             <ProfileIcon />
                                        </div>
                                        {showSearchCustomer && searchCustomer()}
                                   </div>
                                   <span onClick={() => setSegmentInput("")}>
                                        Clear
                                   </span>
                              </div>
                              <div>
                                   <p
                                        onClick={() => {
                                             setShowSort(true);
                                             setShowSearchCustomer(false);
                                        }}
                                   >
                                        <FIlterIcon /> Sort
                                   </p>
                              </div>
                         </div>

                         <div className={`customer-data-container  ${header}`}>
                              <section>
                                   <div>
                                        <div>
                                             <p
                                                  className={
                                                       activeTab === "All"
                                                            ? "status-active"
                                                            : ""
                                                  }
                                                  onClick={() =>
                                                       findAccountStatus(
                                                            "All",
                                                            "All"
                                                       )
                                                  }
                                             >
                                                  All
                                             </p>
                                        </div>
                                        <div>
                                             <p
                                                  className={
                                                       activeTab === "Active"
                                                            ? "status-active"
                                                            : ""
                                                  }
                                                  onClick={() =>
                                                       findAccountStatus(
                                                            "Active",
                                                            "Active"
                                                       )
                                                  }
                                             >
                                                  Active
                                             </p>
                                        </div>
                                        <div>
                                             <p
                                                  className={
                                                       activeTab === "Dormant"
                                                            ? "status-active"
                                                            : ""
                                                  }
                                                  onClick={() =>
                                                       findAccountStatus(
                                                            "Dormant",
                                                            "Dormant"
                                                       )
                                                  }
                                             >
                                                  Dormant
                                             </p>
                                        </div>
                                   </div>
                              </section>

                              {/* <div> */}
                              <div className="customer-info-header">
                                   <p>CUSTOMER NAME</p>
                                   <p>CUSTOMER ID</p>
                                   <p>CUSTOMER CATEGORY</p>
                                   <p>LOAN PERIOD</p>
                                   <p>STATUS</p>
                              </div>
                              <div className="customer-data-container">
                                   {isSearch && segmentInput ? (
                                        <>
                                             <CustomerData
                                                  data={foundCustomer}
                                             />
                                        </>
                                   ) : (
                                        <>
                                             {currentCustomerPageArray.map(
                                                  (data: Customer) => (
                                                       <>
                                                            <CustomerData
                                                                 data={data}
                                                            />
                                                       </>
                                                  )
                                             )}
                                        </>
                                   )}

                                   <div className="pagination-container">
                                        <div className="left-arrow-paginati">
                                             <DoubleLeftArrowPaginationIcon
                                                  disabled={
                                                       currentCustomerPage === 1
                                                  }
                                                  handleClick={() =>
                                                       setCurrentCustomerPage(1)
                                                  }
                                             />
                                             <SingleLeftArrowPaginationIcon
                                                  disabled={
                                                       currentCustomerPage === 1
                                                  }
                                                  handleClick={() =>
                                                       setCurrentCustomerPage(
                                                            currentCustomerPage -
                                                                 1
                                                       )
                                                  }
                                             />
                                        </div>
                                        {renderPageNumbers()}
                                        <div className="right-arrow-pagination">
                                             <SingleRightArrowPaginationIcon
                                                  disabled={
                                                       currentCustomerPage ===
                                                       totalCustomerPages
                                                  }
                                                  handleClick={() =>
                                                       setCurrentCustomerPage(
                                                            currentCustomerPage +
                                                                 1
                                                       )
                                                  }
                                             />
                                             <DoubleRightArrowPaginationIcon
                                                  disabled={
                                                       currentCustomerPage ===
                                                       totalCustomerPages
                                                  }
                                                  handleClick={() =>
                                                       setCurrentCustomerPage(
                                                            Math.ceil(
                                                                 customerDataArray.length /
                                                                      customersPerPage
                                                            )
                                                       )
                                                  }
                                             />
                                        </div>
                                   </div>
                              </div>
                              {/* </div> */}
                         </div>
                         {
                              <div className="bank-profile-container">
                                   <h1>BANK PROFILE COMPARISION</h1>
                                   <div
                                        className={`${bankProfileHeaderClassName}`}
                                   >
                                        <p>CUSTOMERS</p>
                                        <p>TOTAL NUMBER</p>
                                        <p>TRANSACTION VALUE</p>
                                        <p>LOANS TAKEN</p>
                                        <p>LOAN PERFORMANCE</p>
                                   </div>
                                   <div
                                        className={`bank-data-container ${bankDataContainer}`}
                                   >
                                        {bankProfileArray.map(
                                             (info: BankProfileProps) => (
                                                  <div key={info.customers}>
                                                       <p>{info.customers}</p>
                                                       <p>
                                                            {formatNumber.format(
                                                                 info.totalNumber
                                                            )}{" "}
                                                            Customers
                                                       </p>
                                                       <p>
                                                            {
                                                                 info.transactionValue
                                                            }
                                                       </p>
                                                       <p>
                                                            {formatNumber.format(
                                                                 info.loansTaken
                                                            )}
                                                            Ksh
                                                       </p>
                                                       {info.loansPerformance.map(
                                                            (performance) => (
                                                                 <ul>
                                                                      <li>
                                                                           {
                                                                                performance.normal
                                                                           }
                                                                           %
                                                                           Normal
                                                                      </li>
                                                                      <li>
                                                                           {
                                                                                performance.watch
                                                                           }
                                                                           % NPL
                                                                      </li>
                                                                      <li>
                                                                           {
                                                                                performance.NPL
                                                                           }
                                                                           %
                                                                           Watch
                                                                      </li>
                                                                 </ul>
                                                            )
                                                       )}
                                                  </div>
                                             )
                                        )}
                                   </div>
                              </div>
                         }
                    </div>
                    <div className="prop-div"></div>
               </div>
          </>
     );
};

export default ReportComponent;
