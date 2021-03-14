import styled from 'styled-components';

const Picture = styled.img`
    border-radius: 50%;
    border: 3px solid white;
    width: 100px;
`;

function Profile({ user }) {
    // TODO: add featured for updating account here
    return (
        <div>
            <h2>
                <Picture src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
            </h2>
        </div>
    );
}

export default Profile;
