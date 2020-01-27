import React from 'react';

import './styles.css';

function DevItem({ dev }) {

    return (
        <li className="dev-item"> 
        <header>
          <img src={dev.avatar_url} alt={dev.name} />
          <div className="user-info">
            <strong>{dev.name}</strong>
            <p>
              <span>{dev.techs.join(', ')}</span>
            </p>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acesar perfil no Git</a>
      </li>
    );
}

export default DevItem;