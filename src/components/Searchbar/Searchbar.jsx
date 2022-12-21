import { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  search = e => {
    e.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.search}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
        </form>
      </header>
    );
  }
}