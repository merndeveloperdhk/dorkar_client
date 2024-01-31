const ReviewTabs = ({ product }) => {
  const { picture } = product;
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between items-start p-2">
      <div role="tablist" className="tabs tabs-bordered w-2/3">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Description"
        />
        <div role="tabpanel" className="tab-content p-2">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Customer Review (111)"
          checked
        />
        <div role="tabpanel" className="tab-content p-2">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Vendor Informatio"
        />
        <div role="tabpanel" className="tab-content p-2">
          Vendor Information
        </div>
      </div>

      <div className="md:w-1/3 w-full md:h-52 md:mt-12">
        <img src={picture} alt="" className="w-full h-full object-fit" />
      </div>
    </div>
  );
};

export default ReviewTabs;
