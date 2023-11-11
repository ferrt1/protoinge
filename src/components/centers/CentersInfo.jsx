

// eslint-disable-next-line react/prop-types
export const CentersInfo = ({ image, title, description, position, onCenterClick }) => {
    const handleClick = () => {
      if (onCenterClick) {
        onCenterClick(position);
      }
    };
  
    return (
      <div
        className="md:ml-12 mb-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row hover:cursor-pointer"
        onClick={handleClick}
      >
        <img
          className="max-h-[200px] max-w-[350px] rounded-t-lg object-fit md:h-auto md:!rounded-none md:!rounded-l-lg"
          src={image}
          alt={title}
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-black">
            {title}
          </h5>
          <p className="mb-4 text-[12px] text-black dark:text-black">{description}</p>
        </div>
      </div>
    );
  };
