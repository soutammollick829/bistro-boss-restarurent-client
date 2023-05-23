

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="text-center w-6/12 mx-auto my-8">
            <p className="text-[#D99904] mb-2">{subHeading}</p>
            <h2 className="text-4xl border-y-2 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;