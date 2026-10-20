---
id: lynx-wpt-corpus
type: module-design
status: draft
title: Adapted corpus and canonical evidence
parent: lynx-wpt-architecture
---

## Responsibility

Store adapted CSS cases, their provenance and the canonical evidence supporting recorded outcomes. A CSS-module directory contains one named card directory per case, carrying the four-file card structure and TTML metadata block defined by `AGENTS.md` policy; supported nonvisual cards may additionally carry a processor and generated manifest/CSS inputs. `docs/test-conventions.md` states the same conventions and is enforced by committed code, but is not folded into this graph.

Neither a generated card nor terminal metadata alone is a validated conformance result.

## Evidence contract

Stable visual passes and failures retain case-local `evidence/expected.png`, `actual.png` and `diff.png`, managed by Git LFS, with a matching-status summary under `docs/evidence/`. Expected pixels come from WebView rendering the original test, not a WPT match-reference target. Changed terminal visual cards need corresponding evidence updates in the same change.

Completed nonvisual passes/failures instead retain `evidence/testharness-result.json` and a matching testharness-summary TSV. The result binds source revision/hash, generated inputs, build fingerprint, assertion counts and digest; it must not contain session secrets. Infrastructure failure does not qualify as evidence.

## Boundary

Temporary runs, logs, retries and invalid artifacts belong outside the committed corpus. Evidence does not grant permission to approximate the CSS under test, and passing one case does not establish whole-property support. Imported sources remain separate, read-only adaptation inputs; generated cards may use supported runtime integration but must not acquire host runner responsibilities.

Unconfirmed inference: the corpus is one data-contract boundary across CSS modules. Individual properties are not separate software modules requiring duplicate specifications.
