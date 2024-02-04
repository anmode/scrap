<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">README-AI</h1>
</p>
<p align="center">
    <em>HTTP error 429 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/eli64s/readme-ai?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/eli64s/readme-ai?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/eli64s/readme-ai?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/eli64s/readme-ai?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=flat&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash">
	<img src="https://img.shields.io/badge/tqdm-FFC107.svg?style=flat&logo=tqdm&logoColor=black" alt="tqdm">
	<img src="https://img.shields.io/badge/Pydantic-E92063.svg?style=flat&logo=Pydantic&logoColor=white" alt="Pydantic">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/Jinja-B41717.svg?style=flat&logo=Jinja&logoColor=white" alt="Jinja">
	<img src="https://img.shields.io/badge/Poetry-60A5FA.svg?style=flat&logo=Poetry&logoColor=white" alt="Poetry">
	<br>
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/AIOHTTP-2C5BB4.svg?style=flat&logo=AIOHTTP&logoColor=white" alt="AIOHTTP">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/Pytest-0A9EDC.svg?style=flat&logo=Pytest&logoColor=white" alt="Pytest">
</p>
<hr>

## Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running readme-ai](#-running-readme-ai)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

## Overview

HTTP error 429 for prompt `overview`

---

## Features

HTTP error 429 for prompt `features`

---

## Repository Structure

```sh
└── readme-ai/
    ├── .github
    │   ├── release-drafter.yml
    │   └── workflows
    │       ├── coverage.yml
    │       ├── mkdocs.yml
    │       ├── release-drafter.yml
    │       └── release-pipeline.yml
    ├── CHANGELOG.md
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── Dockerfile
    ├── LICENSE
    ├── Makefile
    ├── README.md
    ├── docs
    │   ├── css
    │   │   ├── custom.css
    │   │   └── termynal.css
    │   ├── docs
    │   │   ├── cli_commands.md
    │   │   ├── concepts.md
    │   │   ├── contributing.md
    │   │   ├── examples.md
    │   │   ├── features.md
    │   │   ├── how_it_works.md
    │   │   ├── index.md
    │   │   ├── installation.md
    │   │   ├── prerequisites.md
    │   │   ├── pydantic_settings.md
    │   │   └── usage.md
    │   ├── js
    │   │   ├── custom.js
    │   │   └── termynal.js
    │   └── overrides
    │       └── main.html
    ├── examples
    │   ├── images
    │   │   ├── additional-sections.png
    │   │   ├── contributing-guidelines.png
    │   │   ├── directory-tree.png
    │   │   ├── header-black.png
    │   │   ├── header-cloud.png
    │   │   ├── header-custom.png
    │   │   ├── header-default.png
    │   │   ├── header-flat-square.png
    │   │   ├── header-gradient.png
    │   │   ├── header-mlops.png
    │   │   ├── header-skills-dark.png
    │   │   ├── header-skills.png
    │   │   ├── header-toc-default.png
    │   │   ├── how-it-works.png
    │   │   ├── llm-features.png
    │   │   ├── llm-overview.png
    │   │   ├── llm-summaries.png
    │   │   └── quickstart.png
    │   └── markdown
    │       ├── readme-energy-forecasting.md
    │       ├── readme-fastapi-redis.md
    │       ├── readme-go.md
    │       ├── readme-java.md
    │       ├── readme-javascript.md
    │       ├── readme-kotlin.md
    │       ├── readme-lanarky.md
    │       ├── readme-litellm.md
    │       ├── readme-local.md
    │       ├── readme-mlops.md
    │       ├── readme-offline.md
    │       ├── readme-postgres.md
    │       ├── readme-python.md
    │       ├── readme-rust-c.md
    │       ├── readme-streamlit.md
    │       └── readme-typescript.md
    ├── mkdocs.yml
    ├── noxfile.py
    ├── poetry.lock
    ├── pyproject.toml
    ├── readmeai
    │   ├── __init__.py
    │   ├── app.py
    │   ├── cli
    │   │   ├── __init__.py
    │   │   ├── commands.py
    │   │   └── options.py
    │   ├── config
    │   │   ├── __init__.py
    │   │   ├── enums.py
    │   │   ├── settings.py
    │   │   └── validators.py
    │   ├── core
    │   │   ├── __init__.py
    │   │   ├── base_parser.py
    │   │   ├── factory.py
    │   │   ├── logger.py
    │   │   ├── model.py
    │   │   ├── preprocess.py
    │   │   └── utils.py
    │   ├── exceptions.py
    │   ├── llms
    │   │   ├── __init__.py
    │   │   ├── cache.py
    │   │   ├── prompts.py
    │   │   └── tokenize.py
    │   ├── markdown
    │   │   ├── __init__.py
    │   │   ├── badges.py
    │   │   ├── builder.py
    │   │   ├── data
    │   │   │   ├── shieldsio.json
    │   │   │   └── skill_icons.json
    │   │   ├── quickstart.py
    │   │   ├── tables.py
    │   │   ├── tree.py
    │   │   └── utilities.py
    │   ├── parsers
    │   │   ├── __init__.py
    │   │   ├── cpp.py
    │   │   ├── docker.py
    │   │   ├── go.py
    │   │   ├── gradle.py
    │   │   ├── maven.py
    │   │   ├── npm.py
    │   │   ├── python.py
    │   │   ├── registry.py
    │   │   ├── rust.py
    │   │   └── swift.py
    │   ├── services
    │   │   ├── __init__.py
    │   │   ├── git_metadata.py
    │   │   └── git_utils.py
    │   └── settings
    │       ├── config.toml
    │       ├── dependency_files.toml
    │       ├── ignore_files.toml
    │       ├── language_names.toml
    │       └── language_setup.toml
    ├── scripts
    │   ├── clean.sh
    │   ├── docker.sh
    │   ├── pypi.sh
    │   └── run_batch.sh
    ├── setup
    │   ├── environment.yaml
    │   ├── requirements.txt
    │   └── setup.sh
    └── tests
        ├── __init__.py
        ├── conftest.py
        ├── test_app.py
        ├── test_cli
        │   ├── __init__.py
        │   ├── test_commands.py
        │   └── test_options.py
        ├── test_config
        │   ├── __init__.py
        │   ├── test_enums.py
        │   ├── test_settings.py
        │   └── test_validators.py
        ├── test_core
        │   ├── __init__.py
        │   ├── test_base_parser.py
        │   ├── test_factory.py
        │   ├── test_logger.py
        │   ├── test_model.py
        │   ├── test_preprocess.py
        │   ├── test_tokens.py
        │   └── test_utils.py
        ├── test_exceptions.py
        ├── test_llms
        │   ├── __init__.py
        │   ├── test_cache.py
        │   └── test_prompts.py
        ├── test_markdown
        │   ├── __init__.py
        │   ├── test_badges.py
        │   ├── test_builder.py
        │   ├── test_quickstart.py
        │   ├── test_tables.py
        │   ├── test_tree.py
        │   └── test_utilities.py
        ├── test_parsers
        │   ├── __init__.py
        │   ├── test_cpp.py
        │   ├── test_docker.py
        │   ├── test_go.py
        │   ├── test_gradle.py
        │   ├── test_maven.py
        │   ├── test_npm.py
        │   ├── test_python.py
        │   ├── test_registry.py
        │   ├── test_rust.py
        │   └── test_swift.py
        └── test_services
            ├── __init__.py
            ├── test_git_metadata.py
            └── test_git_utils.py
```

---

## Modules

<details closed><summary>.</summary>

| File                                                                             | Summary                                    |
| -------------------------------------------------------------------------------- | ------------------------------------------ |
| [Dockerfile](https://github.com/eli64s/readme-ai/blob/master/Dockerfile)         | HTTP error 429 for prompt `Dockerfile`     |
| [Makefile](https://github.com/eli64s/readme-ai/blob/master/Makefile)             | HTTP error 429 for prompt `Makefile`       |
| [pyproject.toml](https://github.com/eli64s/readme-ai/blob/master/pyproject.toml) | HTTP error 429 for prompt `pyproject.toml` |
| [poetry.lock](https://github.com/eli64s/readme-ai/blob/master/poetry.lock)       | HTTP error 429 for prompt `poetry.lock`    |
| [noxfile.py](https://github.com/eli64s/readme-ai/blob/master/noxfile.py)         | HTTP error 429 for prompt `noxfile.py`     |

</details>

<details closed><summary>setup</summary>

| File                                                                                       | Summary                                            |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| [setup.sh](https://github.com/eli64s/readme-ai/blob/master/setup/setup.sh)                 | HTTP error 429 for prompt `setup/setup.sh`         |
| [requirements.txt](https://github.com/eli64s/readme-ai/blob/master/setup/requirements.txt) | HTTP error 429 for prompt `setup/requirements.txt` |
| [environment.yaml](https://github.com/eli64s/readme-ai/blob/master/setup/environment.yaml) | HTTP error 429 for prompt `setup/environment.yaml` |

</details>

<details closed><summary>scripts</summary>

| File                                                                                 | Summary                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| [run_batch.sh](https://github.com/eli64s/readme-ai/blob/master/scripts/run_batch.sh) | HTTP error 429 for prompt `scripts/run_batch.sh` |
| [pypi.sh](https://github.com/eli64s/readme-ai/blob/master/scripts/pypi.sh)           | HTTP error 429 for prompt `scripts/pypi.sh`      |
| [clean.sh](https://github.com/eli64s/readme-ai/blob/master/scripts/clean.sh)         | HTTP error 429 for prompt `scripts/clean.sh`     |
| [docker.sh](https://github.com/eli64s/readme-ai/blob/master/scripts/docker.sh)       | HTTP error 429 for prompt `scripts/docker.sh`    |

</details>

<details closed><summary>.github</summary>

| File                                                                                               | Summary                                                 |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [release-drafter.yml](https://github.com/eli64s/readme-ai/blob/master/.github/release-drafter.yml) | HTTP error 429 for prompt `.github/release-drafter.yml` |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                                                                           | Summary                                                            |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [coverage.yml](https://github.com/eli64s/readme-ai/blob/master/.github/workflows/coverage.yml)                 | HTTP error 429 for prompt `.github/workflows/coverage.yml`         |
| [release-pipeline.yml](https://github.com/eli64s/readme-ai/blob/master/.github/workflows/release-pipeline.yml) | HTTP error 429 for prompt `.github/workflows/release-pipeline.yml` |
| [release-drafter.yml](https://github.com/eli64s/readme-ai/blob/master/.github/workflows/release-drafter.yml)   | HTTP error 429 for prompt `.github/workflows/release-drafter.yml`  |

</details>

<details closed><summary>readmeai</summary>

| File                                                                                    | Summary                                            |
| --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [app.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/app.py)               | HTTP error 429 for prompt `readmeai/app.py`        |
| [exceptions.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/exceptions.py) | HTTP error 429 for prompt `readmeai/exceptions.py` |

</details>

<details closed><summary>readmeai.settings</summary>

| File                                                                                                             | Summary                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [ignore_files.toml](https://github.com/eli64s/readme-ai/blob/master/readmeai/settings/ignore_files.toml)         | HTTP error 429 for prompt `readmeai/settings/ignore_files.toml`     |
| [language_names.toml](https://github.com/eli64s/readme-ai/blob/master/readmeai/settings/language_names.toml)     | HTTP error 429 for prompt `readmeai/settings/language_names.toml`   |
| [config.toml](https://github.com/eli64s/readme-ai/blob/master/readmeai/settings/config.toml)                     | HTTP error 429 for prompt `readmeai/settings/config.toml`           |
| [dependency_files.toml](https://github.com/eli64s/readme-ai/blob/master/readmeai/settings/dependency_files.toml) | HTTP error 429 for prompt `readmeai/settings/dependency_files.toml` |
| [language_setup.toml](https://github.com/eli64s/readme-ai/blob/master/readmeai/settings/language_setup.toml)     | HTTP error 429 for prompt `readmeai/settings/language_setup.toml`   |

</details>

<details closed><summary>readmeai.parsers</summary>

| File                                                                                        | Summary                                                  |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [registry.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/registry.py) | HTTP error 429 for prompt `readmeai/parsers/registry.py` |
| [docker.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/docker.py)     | HTTP error 429 for prompt `readmeai/parsers/docker.py`   |
| [npm.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/npm.py)           | HTTP error 429 for prompt `readmeai/parsers/npm.py`      |
| [cpp.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/cpp.py)           | HTTP error 429 for prompt `readmeai/parsers/cpp.py`      |
| [gradle.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/gradle.py)     | HTTP error 429 for prompt `readmeai/parsers/gradle.py`   |
| [swift.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/swift.py)       | HTTP error 429 for prompt `readmeai/parsers/swift.py`    |
| [python.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/python.py)     | HTTP error 429 for prompt `readmeai/parsers/python.py`   |
| [go.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/go.py)             | HTTP error 429 for prompt `readmeai/parsers/go.py`       |
| [maven.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/maven.py)       | HTTP error 429 for prompt `readmeai/parsers/maven.py`    |
| [rust.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/parsers/rust.py)         | HTTP error 429 for prompt `readmeai/parsers/rust.py`     |

</details>

<details closed><summary>readmeai.core</summary>

| File                                                                                           | Summary                                                  |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [preprocess.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/core/preprocess.py)   | HTTP error 429 for prompt `readmeai/core/preprocess.py`  |
| [logger.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/core/logger.py)           | HTTP error 429 for prompt `readmeai/core/logger.py`      |
| [factory.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/core/factory.py)         | HTTP error 429 for prompt `readmeai/core/factory.py`     |
| [model.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/core/model.py)             | HTTP error 429 for prompt `readmeai/core/model.py`       |
| [base_parser.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/core/base_parser.py) | HTTP error 429 for prompt `readmeai/core/base_parser.py` |
| [utils.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/core/utils.py)             | HTTP error 429 for prompt `readmeai/core/utils.py`       |

</details>

<details closed><summary>readmeai.config</summary>

| File                                                                                           | Summary                                                   |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [enums.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/config/enums.py)           | HTTP error 429 for prompt `readmeai/config/enums.py`      |
| [validators.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/config/validators.py) | HTTP error 429 for prompt `readmeai/config/validators.py` |
| [settings.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/config/settings.py)     | HTTP error 429 for prompt `readmeai/config/settings.py`   |

</details>

<details closed><summary>readmeai.markdown</summary>

| File                                                                                             | Summary                                                     |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [tree.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/markdown/tree.py)             | HTTP error 429 for prompt `readmeai/markdown/tree.py`       |
| [builder.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/markdown/builder.py)       | HTTP error 429 for prompt `readmeai/markdown/builder.py`    |
| [badges.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/markdown/badges.py)         | HTTP error 429 for prompt `readmeai/markdown/badges.py`     |
| [tables.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/markdown/tables.py)         | HTTP error 429 for prompt `readmeai/markdown/tables.py`     |
| [utilities.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/markdown/utilities.py)   | HTTP error 429 for prompt `readmeai/markdown/utilities.py`  |
| [quickstart.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/markdown/quickstart.py) | HTTP error 429 for prompt `readmeai/markdown/quickstart.py` |

</details>

<details closed><summary>readmeai.cli</summary>

| File                                                                                    | Summary                                              |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [options.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/cli/options.py)   | HTTP error 429 for prompt `readmeai/cli/options.py`  |
| [commands.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/cli/commands.py) | HTTP error 429 for prompt `readmeai/cli/commands.py` |

</details>

<details closed><summary>readmeai.llms</summary>

| File                                                                                     | Summary                                               |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [cache.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/llms/cache.py)       | HTTP error 429 for prompt `readmeai/llms/cache.py`    |
| [prompts.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/llms/prompts.py)   | HTTP error 429 for prompt `readmeai/llms/prompts.py`  |
| [tokenize.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/llms/tokenize.py) | HTTP error 429 for prompt `readmeai/llms/tokenize.py` |

</details>

<details closed><summary>readmeai.services</summary>

| File                                                                                                 | Summary                                                       |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [git_metadata.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/services/git_metadata.py) | HTTP error 429 for prompt `readmeai/services/git_metadata.py` |
| [git_utils.py](https://github.com/eli64s/readme-ai/blob/master/readmeai/services/git_utils.py)       | HTTP error 429 for prompt `readmeai/services/git_utils.py`    |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **Python**: `version x.y.z`

### Installation

1. Clone the readme-ai repository:

```sh
git clone https://github.com/eli64s/readme-ai
```

2. Change to the project directory:

```sh
cd readme-ai
```

3. Install the dependencies:

```sh
pip install -r requirements.txt
```

### Running readme-ai

Use the following command to run readme-ai:

```sh
python main.py
```

### Tests

To execute tests, run:

```sh
pytest
```

---

## Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/eli64s/readme-ai/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/eli64s/readme-ai/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/eli64s/readme-ai/issues)**: Submit bugs found or log feature requests for Readme-ai.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/eli64s/readme-ai
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
