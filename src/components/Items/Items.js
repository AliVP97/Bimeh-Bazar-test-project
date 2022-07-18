import { useOffersContext } from "hooks";
import { addCommas } from "utils";

import "./style.scss";

const Items = () => {
  const { sortedData } = useOffersContext();

  return (
    <div className="items-card-container">
      {sortedData?.map(
        ({
          company_name,
          slug,
          price,
          discount_value,
          branches_num,
          id,
          rating,
          response_time,
          company_logo,
          promissory,
          installment,
        }) => (
          <div
            className={installment ? "item-card has-footer" : "item-card"}
            key={id}
          >
            <div className="body">
              <div className="logo-name">
                <img src={company_logo} alt={"company-logo"} />
                <div className="name">{company_name}</div>
              </div>
              <div className="specs">
                <div>
                  <div>
                    <div className="title">شعب پرداخت</div>
                    <div>{branches_num} شعبه</div>
                  </div>
                  <div>
                    <div className="title">رتبه رضایتمندی</div>
                    <div>{rating}</div>
                  </div>
                  <div>
                    <div className="title">زمان پاسخگویی</div>
                    <div>{response_time} روز کاری</div>
                  </div>
                  <div>
                    <div className="title">توانگری مالی</div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="submit-column">
                <div className="price">
                  {discount_value ? (
                    <div className="original-price">
                      {addCommas(price)}
                      <div className="line" />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="final-price">
                    {addCommas(price - discount_value)}
                    <div className="unit">تومان</div>
                  </div>
                </div>
                <button>سفارش</button>
              </div>
            </div>
            {installment ? (
              <div className="footer">
                <div className="item">قسطی با چک</div>
              </div>
            ) : (
              ""
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Items;
