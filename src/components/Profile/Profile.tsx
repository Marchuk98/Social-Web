import s from './Profile.module.css'

const Profile = () => {
    return (

        <div className={s.content}>

            <div>
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b0b69b110218509.5fe75aca3a23e.jpg"
                    alt=""/>
            </div>

            <div>ava</div>

            <div>my post

                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Profile;