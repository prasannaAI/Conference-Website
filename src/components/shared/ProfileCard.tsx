const ProfileCard = ({ name, designation, bio, image }: {
    name: string;
    designation: string;
    bio?: JSX.Element;
    image: string;
}) => {
    return (
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={image} />
            <div className="flex-grow sm:pl-4 mr-4">
                <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
                <h3 className="text-gray-500 mb-3">{designation}</h3>
                {bio && (
                    <p className="mb-4 text-textSecondaryColor">
                        {bio}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;