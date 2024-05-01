export const Accordian = ({ accData }) => {
  return (
    <div className="px-2 pb-3 mt-2">
      <h2 className="text-3xl font-bold text-center">{`FAQ's`}</h2>
      <div>
        {accData?.map((acc, i) => (
          <div key={i} className="border-b">
            <div className="mb-2">
              <div className="font-bold text-base">Question:</div>
              <div>{acc?.name}</div>
            </div>
            <div className="mb-2">
              <div className="font-bold text-base">Answer:</div>
              <div>{acc?.acceptedAnswer?.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
