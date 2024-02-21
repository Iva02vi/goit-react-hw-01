import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.statsText}>Followers</span>
          <span className={css.statsNum}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsText}>Views</span>
          <span className={css.statsNum}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsText}>Likes</span>
          <span className={css.statsNum}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
