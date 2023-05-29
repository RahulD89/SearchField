import React, { useState } from 'react';
import './SearchField.css';

const SearchField = () => {
  const [query, setQuery] = useState('');
  const [sortField, setSortField] = useState('stars');
  const [repos, setRepos] = useState([]);

  const fetchRepositories = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=${sortField}`);
      const data = await response.json();
      setRepos(data.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const createRepoCard = (repo) => (
    <div key={repo.id} className="card">
      <img className="avatar" src={repo.owner.avatar_url} alt="Repo Avatar" />
      <div className="repo-info">
        <h2 className="repo-name">{repo.name}</h2>
        <p className="repo-stars">Stars: {repo.stargazers_count}</p>
        <p className="repo-desc">{repo.description}</p>
        <p className="repo-lang">Language: {repo.language}</p>
      </div>
    </div>
  );

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRepositories();
  };

  return (
    <div className="container">
      <h1 className="title">Search Repositories</h1>
      <form onSubmit={handleSearch} className="form">
        <input
          type="text"
          placeholder="Search repositories"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="sort-field"
        >
          <option value="stars">Stars</option>
          <option value="watchers">Watchers Count</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
          <option value="created_at">Created At</option>
          <option value="updated_at">Updated At</option>
        </select>
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="repo-list">
        {repos.map((repo) => createRepoCard(repo))}
      </div>
    </div>
  );
};

export default SearchField;
