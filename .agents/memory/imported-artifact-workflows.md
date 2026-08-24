---
name: Imported artifact workflows
description: Imported web artifacts may contain artifact metadata without a registered managed workflow.
---

Imported artifacts can have a valid artifact.toml but no registered workflow; in that case the preview remains unavailable until a single web workflow is configured. If the Vite config requires PORT and BASE_PATH, a manually configured workflow must provide both values.

**Why:** The import state can preserve the app files and metadata while omitting the runtime registration and injected service environment.

**How to apply:** Check configured workflows before restarting an imported artifact. If none exists, configure only the frontend workflow and pass the app's required runtime variables.